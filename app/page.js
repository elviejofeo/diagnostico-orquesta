import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0E1B28", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "#C8862B", letterSpacing: 2, textTransform: "uppercase", fontFamily: "Arial, sans-serif", fontSize: 12 }}>Orquesta Supply</div>
        <h1 style={{ color: "#F7F4EE", fontSize: 30 }}>Diagnóstico de restaurante</h1>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 20 }}>
          <Link href="/diagnostico" style={btn}>Abrir formulario</Link>
          <Link href="/panel" style={{ ...btn, background: "transparent", border: "1px solid #2A8C86", color: "#2A8C86" }}>Ver panel</Link>
        </div>
      </div>
    </div>
  );
}

const btn = { background: "#2A8C86", color: "#F7F4EE", padding: "12px 22px", borderRadius: 8, textDecoration: "none", fontFamily: "Arial, sans-serif", fontWeight: 700 };
