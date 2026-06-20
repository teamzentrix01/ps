import Link from "next/link";
import {
  FaRing,
  FaBirthdayCake,
  FaGlassCheers,
  FaMagic,
} from "react-icons/fa";

export default function DecorPage() {
  const decorCategories = [
    {
      title: "Wedding Decor",
      icon: <FaRing />,
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&auto=format&fit=crop&q=80",
      description:
        "Elegant mandaps, floral stages, aisle decoration, luxury lighting, and customized wedding themes.",
    },
    {
      title: "Engagement Decor",
      icon: <FaGlassCheers />,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80",
      description:
        "Beautiful engagement backdrops, floral arrangements, and romantic stage setups.",
    },
    {
      title: "Birthday Decor",
      icon: <FaBirthdayCake />,
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&auto=format&fit=crop&q=80",
      description:
        "Creative themes, balloon decoration, custom backdrops, and memorable celebration designs.",
    },
    {
      title: "Luxury Events",
      icon: <FaMagic />,
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&auto=format&fit=crop&q=80",
      description:
        "Premium décor concepts for receptions, corporate events, anniversaries, and special occasions.",
    },
  ];

  const features = [
    "Fresh Floral Arrangements",
    "Premium Stage Decoration",
    "Theme-Based Event Design",
    "Luxury Lighting Concepts",
    "Customized Backdrops",
    "Venue Styling & Setup",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Luxury Decoration Services
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Creative <span className="text-pink-600">Decor Solutions</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Transforming ordinary spaces into unforgettable experiences with
            elegant designs, premium décor, and flawless execution.
          </p>
        </div>
      </section>

      {/* Decor Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {decorCategories.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">
                  <div className="text-pink-600 text-3xl mb-4">
                    {item.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Decor Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-pink-600 font-semibold uppercase tracking-wider">
                Signature Decor
              </span>

              <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
                Bringing Your Dream Celebration To Life
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                At PS Decor, every event is designed with creativity,
                elegance, and attention to detail. From intimate gatherings
                to grand weddings, we create breathtaking environments that
                leave lasting impressions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm"
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&auto=format&fit=crop&q=80"
              alt="Luxury Decor"
              className="rounded-3xl shadow-lg w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-800">
              Decor Gallery
            </h2>
            <p className="text-gray-600 mt-4">
              A glimpse of our beautifully designed events and celebrations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80"
              alt="Decor 1"
              className="rounded-2xl h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80"
              alt="Decor 2"
              className="rounded-2xl h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop&q=80"
              alt="Decor 3"
              className="rounded-2xl h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80"
              alt="Decor 4"
              className="rounded-2xl h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready To Decorate Your Dream Event?
          </h2>

          <p className="text-pink-100 mb-8">
            Let PS Decor create a magical atmosphere for your special day.
          </p>

          <Link
  href="/contact"
  className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-pink-600 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
>
  Book A Consultation
</Link>
        </div>
      </section>
    </main>
  );
}