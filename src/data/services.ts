export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "copias",
    title: "Copias B/N y Color",
    description:
      "Copias rápidas en diferentes tamaños: carta, oficio y doble carta. Servicio individual o en volumen con precios especiales para mayoreo.",
    icon: "📄",
    features: [
      "Carta, oficio y doble carta",
      "Blanco y negro o a color",
      "Precios especiales en mayoreo",
      "Entrega inmediata",
    ],
  },
  {
    id: "diseno",
    title: "Diseño Gráfico",
    description:
      "Creamos diseños personalizados para tus eventos y negocio: invitaciones de bodas, XV años, bautizos, volantes, tarjetas de presentación y lonas.",
    icon: "🎨",
    features: [
      "Invitaciones para todo tipo de evento",
      "Volantes y folletos publicitarios",
      "Tarjetas de presentación",
      "Lonas y banners para eventos",
    ],
  },
  {
    id: "engargolados",
    title: "Engargolados y Encuadernados",
    description:
      "Profesionaliza tus documentos con nuestros servicios de engargolado y encuadernado: tesis, trabajos escolares, manuales y reportes empresariales.",
    icon: "📚",
    features: [
      "Engargolado de plástico y metálico",
      "Encuadernado térmico",
      "Tesis y trabajos escolares",
      "Manuales y reportes empresariales",
    ],
  },
  {
    id: "tramites",
    title: "Trámites y Escaneo",
    description:
      "Te ayudamos con el escaneo de tus documentos, impresión de formatos oficiales y apoyo en trámites documentales diversos.",
    icon: "🖨️",
    features: [
      "Escaneo de documentos a alta resolución",
      "Impresión de formatos oficiales",
      "Apoyo en trámites documentales",
      "Envío digital de documentos",
    ],
  },
];
