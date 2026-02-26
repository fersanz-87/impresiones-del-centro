import { pricing } from "@/data/pricing";

export default function Pricing() {
  return (
    <section id="precios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Lista de Precios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Consulta nuestros precios competitivos. Todos los precios están en
            pesos mexicanos (MXN).
          </p>
        </div>

        {/* Desktop: Table */}
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-500 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Servicio
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">
                    Precio
                  </th>
                </tr>
              </thead>
              {pricing.map((category) => (
                <tbody key={category.category}>
                  <tr className="bg-gray-50">
                    <td
                      colSpan={2}
                      className="px-6 py-3 text-sm font-bold text-primary-600"
                    >
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item, idx) => (
                    <tr
                      key={item.service}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    >
                      <td className="px-6 py-3 text-sm text-gray-700">
                        {item.service}
                      </td>
                      <td className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>

        {/* Mobile: Cards */}
        <div className="space-y-8 md:hidden">
          {pricing.map((category) => (
            <div key={category.category}>
              <h3 className="mb-4 text-lg font-bold text-primary-600">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.service}
                    className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-4 py-3"
                  >
                    <span className="text-sm text-gray-700">
                      {item.service}
                    </span>
                    <span className="ml-4 shrink-0 text-sm font-bold text-gray-900">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          * Precios sujetos a cambios sin previo aviso. Cotizaciones especiales
          para mayoreo.
        </p>
      </div>
    </section>
  );
}
