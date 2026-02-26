export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center bg-primary-700"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 to-primary-600/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center">
        <span className="mb-6 inline-block rounded-full bg-accent-400/20 px-4 py-1.5 text-sm font-semibold text-accent-100">
          Más de 15 años sirviendo a Abasolo
        </span>
        <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Copias e Impresiones{" "}
          <span className="text-accent-300">Del Centro</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-100 sm:text-xl">
          Tu centro de copiado e impresión de confianza en Abasolo. Calidad,
          rapidez y los mejores precios para tus documentos, diseños y proyectos.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#servicios"
            className="inline-flex items-center rounded-lg bg-accent-400 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-accent-500"
          >
            Ver Servicios
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  );
}
