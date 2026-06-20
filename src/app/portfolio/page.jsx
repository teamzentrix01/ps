import { FaCamera, FaHeart, FaStar } from "react-icons/fa";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "Royal Wedding Setup",
      category: "Wedding Decor",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Luxury Reception",
      category: "Reception Decor",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Floral Mandap Design",
      category: "Wedding Stage",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Engagement Ceremony",
      category: "Engagement Decor",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Outdoor Garden Wedding",
      category: "Destination Wedding",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Birthday Celebration",
      category: "Birthday Decor",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Corporate Event Setup",
      category: "Corporate Event",
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "Luxury Venue Styling",
      category: "Venue Decor",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-pink-600">Portfolio</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore some of our most memorable wedding, engagement,
            reception, and event decoration projects crafted with passion
            and creativity.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <FaHeart className="text-pink-600 text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <FaCamera className="text-pink-600 text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">1000+</h3>
              <p className="text-gray-600 mt-2">Events Completed</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <FaStar className="text-pink-600 text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">5★</h3>
              <p className="text-gray-600 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                  <span className="text-pink-300 text-sm font-medium">
                    {item.category}
                  </span>

                  <h3 className="text-white text-xl font-semibold mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1400&auto=format&fit=crop&q=80"
              alt="Featured Event"
              className="rounded-3xl shadow-lg w-full h-[500px] object-cover"
            />

            <div>
              <span className="text-pink-600 font-semibold uppercase tracking-wider">
                Featured Project
              </span>

              <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
                Luxury Wedding Celebration
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                A grand wedding setup featuring elegant floral arrangements,
                premium lighting, luxury seating, and a beautifully designed
                stage that created a magical atmosphere for the couple and
                their guests.
              </p>

              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition">
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready To Create Your Dream Event?
          </h2>

          <p className="text-pink-100 mb-8">
            Let PS Decor transform your vision into a breathtaking celebration.
          </p>

          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Get Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}