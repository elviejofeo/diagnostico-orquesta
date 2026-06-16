"use client";
import { useState } from "react";
import { SECTIONS, ALLQ } from "../../lib/questions";
import { supabase } from "../../lib/supabase";

const NAVY = "#0E1B28", TEAL = "#2A8C86", AMBER = "#C8862B", PAPER = "#F7F4EE", LINE = "#D9D2C5";

export default function Diagnostico() {
  const [step, setStep] = useState(-1);
  const [ans, setAns] = useState({});
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const total = ALLQ.length;

  const submit = async () => {
    setSending(true); setError("");
    try {
      const { error } = await supabase.from("diagnosticos").insert({
        restaurante: ans.nombre || "Sin nombre",
        respuestas: ans,
      });
      if (error) throw error;
      setStep(total);
    } catch (e) {
      setError("No se pudo enviar. Revisa tu conexión e intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  if (step === -1)
    return (
      <Shell>
        <div style={eyebrow}>Orquesta Supply</div>
        <h1 style={{ ...h1, fontSize: 26 }}>Diagnóstico de tu restaurante</h1>
        <p style={body}>
          Unas preguntas rápidas sobre tu negocio. Contesta con tu mejor estimado, no
          tiene que ser exacto. Toma unos minutos y con esto armo tu análisis para
          vender más, ganar más y ordenar la operación.
        </p>
        <button style={primary} onClick={() => setStep(0)}>Empezar →</button>
      </Shell>
    );

  if (step >= total)
    return (
      <Shell>
        <div style={{ fontSize: 42, textAlign: "center" }}>✓</div>
        <h1 style={{ ...h1, fontSize: 24, textAlign: "center" }}>¡Listo, gracias!</h1>
        <p style={{ ...body, textAlign: "center" }}>
          Tus respuestas se guardaron. En breve te comparto tu análisis con tus
          oportunidades de venta, margen y operación.
        </p>
        <div style={{ ...note, textAlign: "center" }}>— Juanjo · Orquesta Supply</div>
      </Shell>
    );

  const cur = ALLQ[step];
  const set = (v) => setAns({ ...ans, [cur.id]: v });
  const optional = cur.id === "extra";
  const filled = optional || (ans[cur.id] !== undefined && ans[cur.id] !== "");
  const last = step === total - 1;

  return (
    <Shell>
      <div style={progressRow}>
        <span style={{ ...tag, background: cur.color }}>{cur.tag}</span>
        <span style={progressTxt}>{step + 1}/{total}</span>
      </div>
      <div style={track}><div style={{ ...fill, width: `${((step + 1) / total) * 100}%` }} /></div>
      <h2 style={qStyle}>{cur.q}</h2>

      {cur.type === "text" && (
        <input autoFocus value={ans[cur.id] || ""} placeholder={cur.ph}
          onChange={(e) => set(e.target.value)} style={input} />
      )}
      {cur.type === "area" && (
        <textarea value={ans[cur.id] || ""} placeholder={cur.ph} rows={4}
          onChange={(e) => set(e.target.value)} style={{ ...input, resize: "none" }} />
      )}
      {cur.type === "choice" && (
        <div style={{ display: "grid", gap: 8, marginTop: 6 }}>
          {cur.opts.map((o) => (
            <button key={o} onClick={() => set(o)} style={{
              ...optBtn,
              background: ans[cur.id] === o ? cur.color : "#fff",
              color: ans[cur.id] === o ? PAPER : NAVY, borderColor: cur.color,
            }}>{o}</button>
          ))}
        </div>
      )}

      {error && <p style={{ color: "#9a2e2e", fontSize: 13, fontFamily: "Arial,sans-serif", marginTop: 12 }}>{error}</p>}

      <div style={navRow}>
        <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} style={ghost}>← Atrás</button>
        <button
          onClick={() => (last ? submit() : setStep(step + 1))}
          disabled={!filled || sending}
          style={{ ...primary, opacity: filled && !sending ? 1 : 0.4, width: "auto", margin: 0 }}
        >
          {last ? (sending ? "Enviando…" : "Enviar") : "Siguiente →"}
        </button>
      </div>
    </Shell>
  );
}

function Shell({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: NAVY, fontFamily: "Georgia, serif", padding: "16px 0 48px" }}>
      <div style={{ maxWidth: 460, margin: "0 auto" }}>
        <div style={card}>{children}</div>
      </div>
    </div>
  );
}

const card = { background: PAPER, borderRadius: 16, padding: "24px 22px", margin: "4px 12px", boxShadow: "0 16px 36px rgba(0,0,0,.3)" };
const eyebrow = { color: AMBER, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontFamily: "Arial, sans-serif" };
const h1 = { color: NAVY, lineHeight: 1.12, margin: "6px 0 10px" };
const body = { color: "#5d5648", fontSize: 15, lineHeight: 1.5, fontFamily: "Arial, sans-serif" };
const note = { color: "#8a8273", fontSize: 12, fontFamily: "Arial, sans-serif", marginTop: 14 };
const progressRow = { display: "flex", justifyContent: "space-between", alignItems: "center" };
const tag = { color: PAPER, fontSize: 11, fontFamily: "Arial, sans-serif", padding: "3px 10px", borderRadius: 20 };
const progressTxt = { fontFamily: "Arial, sans-serif", fontSize: 12, color: "#8a8273" };
const track = { height: 5, background: "#e2dccf", borderRadius: 4, margin: "10px 0 4px", overflow: "hidden" };
const fill = { height: "100%", background: AMBER, transition: "width .3s ease" };
const qStyle = { color: NAVY, fontSize: 21, margin: "16px 0 14px", lineHeight: 1.25 };
const input = { width: "100%", boxSizing: "border-box", padding: "12px 14px", fontSize: 16, border: `1px solid ${LINE}`, borderRadius: 10, fontFamily: "Arial, sans-serif", background: "#fff", color: NAVY };
const optBtn = { padding: "13px 14px", border: "2px solid", borderRadius: 10, cursor: "pointer", fontFamily: "Arial, sans-serif", fontSize: 15, textAlign: "left" };
const navRow = { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 };
const ghost = { background: "transparent", border: `1px solid ${LINE}`, color: NAVY, padding: "10px 16px", borderRadius: 8, cursor: "pointer", fontFamily: "Arial, sans-serif", fontSize: 14 };
const primary = { background: TEAL, border: "none", color: PAPER, padding: "12px 20px", borderRadius: 8, cursor: "pointer", fontFamily: "Arial, sans-serif", fontSize: 15, fontWeight: 700, width: "100%", marginTop: 8 };
