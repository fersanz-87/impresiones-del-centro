import { promotions } from "@/data/promotions";

export default function Promotions() {
  return (
    <section id="promociones" className="bg-primary-600 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Promociones y Paquetes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-100">
            Aprovecha nuestros paquetes especiales diseñados para ahorrarte
            tiempo y dinero.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="relative rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"
            >
              <span className="absolute -top-3 left-4 rounded-full bg-accent-400 px-3 py-1 text-xs font-bold text-white">
                {promo.badge}
              </span>
              <h3 className="mb-3 mt-2 text-lg font-bold text-gray-900">
                {promo.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {promo.description}
              </p>
              <p className="text-2xl font-bold text-primary-500">
                {promo.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
