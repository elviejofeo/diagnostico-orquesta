export const metadata = {
  title: "Diagnóstico · Orquesta Supply",
  description: "Diagnóstico de restaurante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
