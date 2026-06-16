const plans = [
  {
    title: "Landing Page",
    price: "$300+",
  },
  {
    title: "Sitio Corporativo",
    price: "$600+",
  },
  {
    title: "Tienda Online",
    price: "$1200+",
  },
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <h2 className="mb-16 text-center text-5xl font-semibold">
        Precios Referenciales
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="rounded-3xl bg-[#2b2b2b] p-8 text-[#ebe8de]"
          >
            <h3 className="mb-4 text-2xl font-semibold">
              {plan.title}
            </h3>

            <p className="text-4xl font-bold">
              {plan.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}