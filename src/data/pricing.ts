export interface PriceItem {
  service: string;
  price: string;
}

export interface PriceCategory {
  category: string;
  items: PriceItem[];
}

export const pricing: PriceCategory[] = [
  {
    category: "Copias",
    items: [
      { service: "Copia B/N tamaño carta", price: "$1.00" },
      { service: "Copia B/N tamaño oficio", price: "$1.50" },
      { service: "Copia B/N doble carta", price: "$2.50" },
      { service: "Copia a color tamaño carta", price: "$3.50" },
      { service: "Copia a color tamaño oficio", price: "$5.00" },
      { service: "Copia a color doble carta", price: "$8.00" },
    ],
  },
  {
    category: "Impresiones",
    items: [
      { service: "Impresión B/N tamaño carta", price: "$2.00" },
      { service: "Impresión B/N tamaño oficio", price: "$2.50" },
      { service: "Impresión a color tamaño carta", price: "$5.00" },
      { service: "Impresión a color tamaño oficio", price: "$7.00" },
      { service: "Impresión fotográfica 4x6", price: "$10.00" },
    ],
  },
  {
    category: "Engargolados",
    items: [
      { service: "Engargolado plástico (hasta 100 hojas)", price: "$25.00" },
      { service: "Engargolado plástico (100-200 hojas)", price: "$35.00" },
      { service: "Engargolado metálico", price: "$45.00" },
      { service: "Encuadernado térmico", price: "$55.00" },
    ],
  },
  {
    category: "Escaneo y Otros",
    items: [
      { service: "Escaneo por página", price: "$5.00" },
      { service: "Escaneo y envío por correo", price: "$8.00" },
      { service: "Impresión de formato oficial", price: "$10.00" },
      { service: "Enmicado tamaño carta", price: "$15.00" },
      { service: "Enmicado tamaño credencial", price: "$10.00" },
    ],
  },
];
