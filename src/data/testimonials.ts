export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "María González",
    role: "Estudiante universitaria",
    text: "Siempre vengo a imprimir mis trabajos y tesis aquí. El servicio es rápido, los precios son muy accesibles y la calidad de impresión es excelente. ¡Los recomiendo al 100%!",
    rating: 5,
  },
  {
    name: "Roberto Hernández",
    role: "Dueño de negocio local",
    text: "Mandé hacer mis tarjetas de presentación y volantes publicitarios. Quedaron increíbles, el diseño fue justo lo que necesitaba. Ahora siempre vengo para todo lo de mi negocio.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Mamá organizadora de eventos",
    text: "Las invitaciones para los XV años de mi hija quedaron hermosas. El diseñador fue muy paciente y atento con los cambios que pedí. Precio justo y entrega a tiempo.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Contador público",
    text: "Llevo años usando sus servicios para imprimir documentos fiscales y engargolar reportes para mis clientes. Son profesionales, confiables y siempre cumplen con los tiempos.",
    rating: 4,
  },
  {
    name: "Ana Lucía Torres",
    role: "Maestra de primaria",
    text: "Cada inicio de curso vengo a sacar copias de mis materiales didácticos. Me dan buen precio por volumen y siempre están dispuestos a ayudarme con el formato.",
    rating: 5,
  },
];
