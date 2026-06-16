// Estructura del diagnóstico — restaurante de mariscos, malecón Presa de la Boca.
// 6 áreas de negocio, no solo merma. Una sola fuente de verdad para formulario y panel.

export const SECTIONS = [
  {
    tag: "El negocio",
    color: "#0E1B28",
    intro: "Lo básico para ubicarte.",
    questions: [
      { id: "nombre", q: "¿Cómo se llama tu restaurante?", type: "text", ph: "Nombre del lugar" },
      { id: "anos", q: "¿Cuántos años tiene operando?", type: "text", ph: "ej. 6 años" },
      { id: "capacidad", q: "¿Cuántas mesas / comensales caben?", type: "text", ph: "ej. 20 mesas, 80 personas" },
    ],
  },
  {
    tag: "Ventas e ingreso",
    color: "#2A8C86",
    intro: "Lo que más te interesa: cuánto entra y de dónde.",
    questions: [
      { id: "venta_mes", q: "¿Cuánto vendes al mes, más o menos?", type: "text", ph: "$ aprox." },
      { id: "ticket", q: "¿Cuánto gasta en promedio cada persona?", type: "text", ph: "$ por persona" },
      { id: "finde_semana", q: "¿Qué parte de tu venta es de fin de semana?", type: "choice", opts: ["Casi todo (80%+)", "La mayoría (~60%)", "Parejo entre semana y finde"] },
      { id: "temporada", q: "¿Qué tanto cambia tu venta entre temporada alta y baja?", type: "choice", opts: ["Muchísimo (temporada me sostiene)", "Bastante", "Poco, es parejo"] },
      { id: "alta", q: "¿Cuál es tu temporada más fuerte?", type: "area", ph: "ej. Cuaresma, verano, vacaciones..." },
      { id: "bebidas", q: "¿Más o menos qué parte de la venta son bebidas (cerveza, refrescos)?", type: "choice", opts: ["Mucha (30%+)", "Algo (~20%)", "Poca", "No sé" ] },
      { id: "platillos_top", q: "¿Tus 5 platillos que más vendes?", type: "area", ph: "uno por línea" },
      { id: "se_acaba", q: "¿Se te acaba algún platillo en tus días fuertes?", type: "choice", opts: ["Sí, seguido", "A veces", "Casi nunca"] },
    ],
  },
  {
    tag: "Costo de los platillos",
    color: "#C8862B",
    intro: "Saber qué te deja cada cosa.",
    questions: [
      { id: "costeo", q: "¿Sabes cuánto te cuesta producir cada platillo?", type: "choice", opts: ["Sí, todos", "Solo algunos", "No"] },
      { id: "recetas", q: "¿Tienes recetas con medidas fijas o va al tanteo?", type: "choice", opts: ["Medidas fijas", "Mixto", "Al tanteo"] },
      { id: "mas_deja", q: "¿Cuál crees que es el platillo que más te deja?", type: "text", ph: "" },
      { id: "num_platillos", q: "¿Cuántos platillos tienes en la carta?", type: "text", ph: "número" },
      { id: "subio_precios", q: "¿Has subido precios en el último año?", type: "choice", opts: ["Sí", "No"] },
    ],
  },
  {
    tag: "Insumos y proveedores",
    color: "#2A8C86",
    intro: "El marisco es tu costo más grande y más delicado.",
    questions: [
      { id: "proveedores", q: "¿Con cuántos proveedores de marisco trabajas?", type: "choice", opts: ["Uno solo", "Dos o tres", "Varios, según precio"] },
      { id: "negocia", q: "¿Negocias precio o compras a lo que te den?", type: "choice", opts: ["Negocio siempre", "A veces", "Compro a lo que haya"] },
      { id: "precio_pega", q: "¿Qué tanto te pega cuando sube el precio del marisco?", type: "choice", opts: ["Mucho, me come el margen", "Algo", "Lo absorbo bien"] },
      { id: "insumos_caros", q: "¿Tus 3 insumos más caros?", type: "area", ph: "ej. camarón, pulpo, pescado..." },
      { id: "frescura", q: "¿Cómo aseguras la frescura / cómo recibes el producto?", type: "area", ph: "" },
    ],
  },
  {
    tag: "Mano de obra",
    color: "#0E1B28",
    intro: "Tu segundo costo más grande, sobre todo en fin de semana.",
    questions: [
      { id: "empleados_fijos", q: "¿Cuántos empleados fijos tienes?", type: "text", ph: "número" },
      { id: "eventuales", q: "¿Contratas gente extra en fin de semana o temporada?", type: "choice", opts: ["Sí, bastante", "Algo", "No, los mismos siempre"] },
      { id: "nomina_pct", q: "¿Sabes qué parte de tu venta se va en nómina?", type: "choice", opts: ["Sí lo tengo medido", "Más o menos", "No sé"] },
      { id: "rotacion", q: "¿Qué tanto se te va la gente (rotación)?", type: "choice", opts: ["Mucho, batallo para retener", "Normal", "Poco, equipo estable"] },
      { id: "dolor_personal", q: "¿Cuál es tu mayor dolor con el personal?", type: "area", ph: "ej. faltan en domingo, capacitación, costo..." },
    ],
  },
  {
    tag: "Merma y operación",
    color: "#C8862B",
    intro: "El desperdicio y cómo fluye el servicio.",
    questions: [
      { id: "merma", q: "¿Cuánto tiras a la basura por semana, más o menos?", type: "text", ph: "$ aprox." },
      { id: "como_compra", q: "¿Cómo decides cuánto comprar de lo perecedero?", type: "area", ph: "" },
      { id: "inventario", q: "¿Cada cuánto haces inventario?", type: "choice", opts: ["Diario", "Semanal", "Quincenal", "Mensual", "No llevo"] },
      { id: "comandas", q: "¿Cómo tomas las comandas?", type: "choice", opts: ["Papel", "Sistema (POS)", "App", "Otro"] },
      { id: "saturacion", q: "¿Pierdes clientes por espera o saturación en hora pico?", type: "choice", opts: ["Sí, seguido", "A veces", "Casi nunca"] },
    ],
  },
  {
    tag: "Atraer clientes",
    color: "#2A8C86",
    intro: "Estás en un destino de paseo — hay que capitalizarlo.",
    questions: [
      { id: "como_llegan", q: "¿Cómo se entera la gente de tu restaurante?", type: "area", ph: "ej. pasan por el malecón, redes, recomendación..." },
      { id: "redes", q: "¿Tienes redes sociales activas?", type: "choice", opts: ["Sí, activas", "Tengo pero no las uso", "No"] },
      { id: "temporada_baja", q: "¿Qué haces para vender en temporada baja o entre semana?", type: "area", ph: "" },
    ],
  },
  {
    tag: "Lo más importante",
    color: "#0E1B28",
    intro: "",
    questions: [
      { id: "meta", q: "Si pudieras mejorar UNA cosa en 6 meses, ¿qué sería?", type: "choice", opts: ["Vender más / atraer clientes", "Ganar más por venta (margen)", "Bajar costos (insumos/nómina/merma)", "Ordenar la operación"] },
      { id: "extra", q: "¿Algo más que quieras que sepa de tu negocio?", type: "area", ph: "opcional" },
    ],
  },
];

export const ALLQ = SECTIONS.flatMap((s) =>
  s.questions.map((q) => ({ ...q, tag: s.tag, color: s.color }))
);
