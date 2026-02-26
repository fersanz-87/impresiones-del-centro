export interface Promotion {
  id: string;
  title: string;
  description: string;
  price: string;
  badge: string;
}

export const promotions: Promotion[] = [
  {
    id: "estudiante",
    title: "Paquete Estudiante",
    description:
      "100 copias en blanco y negro tamaño carta + engargolado de plástico. Ideal para tesis y trabajos escolares.",
    price: "$120 MXN",
    badge: "Popular",
  },
  {
    id: "emprendedor",
    title: "Paquete Emprendedor",
    description:
      "500 tarjetas de presentación a color con diseño profesional incluido. Dale imagen a tu negocio.",
    price: "$350 MXN",
    badge: "Mejor valor",
  },
  {
    id: "evento",
    title: "Paquete Evento",
    description:
      "50 invitaciones con diseño personalizado para bodas, XV años o bautizos. Incluye sobre.",
    price: "Desde $450 MXN",
    badge: "Personalizado",
  },
  {
    id: "descuento-color",
    title: "Lunes y Martes a Color",
    description:
      "Todos los lunes y martes disfruta de un 20% de descuento en todas las copias e impresiones a color.",
    price: "20% OFF",
    badge: "Promoción semanal",
  },
];
