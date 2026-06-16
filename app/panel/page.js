"use client";
import { useEffect, useState } from "react";
import { ALLQ } from "../../lib/questions";
import { supabase } from "../../lib/supabase";

const NAVY = "#0E1B28", TEAL = "#2A8C86", AMBER = "#C8862B", PAPER = "#F7F4EE", LINE = "#D9D2C5";

export default function Panel() {
  const [rows, setRows] = useState(null);
  const [open, setOpen] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("diagnosticos")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) setErr("No se pudieron cargar las respuestas.");
      else setRows(data || []);
    })();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: NAVY, fontFamily: "Georgia, serif", padding: "20px 0 48px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 14px" }}>
        <div style={eyebrow}>Orquesta Supply · Respuestas</div>
        <h1 style={h1}>Diagnósticos recibidos</h1>

        {err && <p style={{ color: "#f0b3b3", fontFamily: "Arial,sans-serif" }}>{err}</p>}
        {rows === null && !err && <p style={muted}>Cargando…</p>}
        {rows && rows.length === 0 && (
          <p style={muted}>Aún no hay respuestas. Comparte el enlace del diagnóstico y aquí aparecerán.</p>
        )}

        {rows && rows.map((r) => {
          const a = r.respuestas || {};
          const fecha = new Date(r.created_at).toLocaleDateString("es-MX", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
          const isOpen = open === r.id;
          return (
            <div key={r.id} style={{ marginBottom: 10 }}>
              <button onClick={() => setOpen(isOpen ? null : r.id)} style={row}>
                <span style={{ flex: 1, textAlign: "left" }}>
                  <span style={{ fontWeight: 700, fontFamily: "Georgia, serif", fontSize: 16, color: NAVY }}>
                    {r.restaurante}
                  </span>
                  <span style={{ display: "block", fontSize: 12, color: "#8a8273", fontFamily: "Arial, sans-serif" }}>
                    {fecha}{a.meta ? ` · quiere: ${a.meta}` : ""}
                  </span>
                </span>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: TEAL, fontWeight: 700 }}>
                  {isOpen ? "cerrar ▴" : "ver ▾"}
                </span>
              </button>
              {isOpen && (
                <div style={detail}>
                  {ALLQ.map((q) => (
                    <div key={q.id} style={qRow}>
                      <div style={{ fontSize: 12, color: "#8a8273", fontFamily: "Arial, sans-serif" }}>{q.q}</div>
                      <div style={{ fontSize: 14, color: NAVY, fontFamily: "Arial, sans-serif", whiteSpace: "pre-line", fontWeight: 600 }}>
                        {a[q.id] || "—"}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const eyebrow = { color: AMBER, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontFamily: "Arial, sans-serif", padding: "0 4px" };
const h1 = { color: PAPER, fontSize: 24, margin: "2px 4px 16px" };
const muted = { color: "#8a9a98", fontFamily: "Arial, sans-serif", padding: "0 4px" };
const row = { width: "100%", display: "flex", alignItems: "center", background: PAPER, border: `1px solid ${LINE}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer" };
const detail = { background: "#fff", border: `1px solid ${LINE}`, borderTop: "none", borderRadius: "0 0 10px 10px", padding: 14 };
const qRow = { padding: "7px 0", borderBottom: `1px solid ${LINE}` };
