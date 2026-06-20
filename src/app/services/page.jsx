export default function ServicesPage() {
  const services = [
    {
      title: "Wedding Decoration",
      description:
        "Elegant stage setups, floral arrangements, mandap decoration, and complete wedding venue transformation.",
      icon: "💍",
    },
    {
      title: "Birthday Decoration",
      description:
        "Creative birthday themes, balloon decoration, backdrop designs, and customized celebration setups.",
      icon: "🎂",
    },
    {
      title: "Engagement Decoration",
      description:
        "Beautiful engagement stages, floral décor, lighting arrangements, and romantic themes.",
      icon: "💖",
    },
    {
      title: "Corporate Events",
      description:
        "Professional event decoration for conferences, product launches, annual functions, and award ceremonies.",
      icon: "🏢",
    },
    {
      title: "Venue Decoration",
      description:
        "Complete venue styling with premium décor elements, lighting, flowers, and customized themes.",
      icon: "✨",
    },
    {
      title: "Theme-Based Events",
      description:
        "Unique and personalized event themes designed according to your vision and requirements.",
      icon: "🎨",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-pink-600">Services</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We create unforgettable experiences through elegant décor,
            creative concepts, and flawless execution for every celebration.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="text-5xl mb-5">{service.icon}</div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Why Choose PS Decor?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-pink-600">
                Creative Designs
              </h3>
              <p className="text-gray-600">
                Customized décor concepts tailored to your vision and event
                theme.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-pink-600">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                High-quality materials, flowers, lighting, and décor elements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-pink-600">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Dedicated professionals ensuring flawless event execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Create Something Beautiful Together
          </h2>

          <p className="text-pink-100 mb-8">
            Contact us today and let us turn your dream celebration into
            reality.
          </p>

          <button className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transition">
            Get Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}