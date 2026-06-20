import { FaMapMarkerAlt, FaUsers, FaCamera } from "react-icons/fa";

export default function VenuesPage() {
  const venues = [
    {
      name: "Luxury Banquet Hall",
      location: "Meerut, Uttar Pradesh",
      capacity: "500+ Guests",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&auto=format&fit=crop&q=80",
   },
    {
      name: "Royal Garden Venue",
      location: "Delhi NCR",
      capacity: "1000+ Guests",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Destination Wedding Resort",
      location: "Jaipur, Rajasthan",
      capacity: "800+ Guests",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Premium Farmhouse",
      location: "Ghaziabad, Uttar Pradesh",
      capacity: "300+ Guests",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Elegant Indoor Hall",
      location: "Noida, Uttar Pradesh",
      capacity: "600+ Guests",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Open Lawn Venue",
      location: "Meerut, Uttar Pradesh",
      capacity: "1500+ Guests",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Wedding & Event <span className="text-pink-600">Venues</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Discover beautiful venues for weddings, engagements, receptions,
            birthdays, and corporate events. PS Decor helps you find the
            perfect location for your special celebration.
          </p>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
              >
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {venue.name}
                  </h3>

                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-pink-600" />
                      <span>{venue.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaUsers className="text-pink-600" />
                      <span>{venue.capacity}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaCamera className="text-pink-600" />
                      <span>Perfect for Photography</span>
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-medium transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Venues */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Why Choose Our Venues?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">
                Prime Locations
              </h3>
              <p className="text-gray-600">
                Easily accessible venues with ample parking and premium
                facilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">
                Elegant Ambience
              </h3>
              <p className="text-gray-600">
                Beautifully designed spaces perfect for luxury celebrations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">
                Custom Decoration
              </h3>
              <p className="text-gray-600">
                Complete venue transformation by the PS Decor team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Looking For The Perfect Venue?
          </h2>

          <p className="text-pink-100 mb-8">
            Let our team help you choose and decorate the ideal venue for your
            dream event.
          </p>

          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}