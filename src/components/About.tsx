const values = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rapidez en el servicio",
    description:
      "Entendemos que tu tiempo es valioso. Trabajamos con eficiencia para entregarte tus documentos lo antes posible.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Calidad garantizada",
    description:
      "Utilizamos equipos de última generación y materiales de primera para asegurar resultados impecables.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    title: "Precios accesibles",
    description:
      "Ofrecemos los mejores precios de la zona sin sacrificar calidad. Promociones y descuentos por volumen.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Atención personalizada",
    description:
      "Te atendemos con calidez y dedicación. Nos tomamos el tiempo de entender lo que necesitas para darte el mejor resultado.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Sobre Nosotros
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            En <strong>Copias e Impresiones Del Centro</strong> llevamos más de
            15 años siendo parte de la comunidad de Abasolo, Guanajuato. Desde
            nuestros inicios, nos hemos dedicado a ofrecer servicios de copiado,
            impresión y diseño con la mejor calidad y atención. Somos el aliado
            de estudiantes, emprendedores, profesionistas y familias que buscan
            un servicio confiable, rápido y a buen precio.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                {value.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
