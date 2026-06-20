import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
            Let's Plan Your Dream Event
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mt-6 mb-4">
            Get A <span className="text-pink-600">Quote</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Tell us about your event and we'll provide a customized decoration
            plan and quotation tailored to your requirements.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Request A Quote
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500">
                    <option>Select Event Type</option>
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Reception</option>
                    <option>Birthday Party</option>
                    <option>Corporate Event</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Venue Location
                  </label>
                  <input
                    type="text"
                    placeholder="City / Venue Name"
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Estimated Guests
                  </label>
                  <input
                    type="number"
                    placeholder="Number of Guests"
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Decoration Requirements
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your decoration requirements..."
                    className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-semibold transition"
                >
                  Request Quote
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                  <FaPhoneAlt className="text-pink-600 text-2xl" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Call Us
                    </h3>
                    <p className="text-gray-600">
                      +91 7599208222
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                  <FaEnvelope className="text-pink-600 text-2xl" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Email Us
                    </h3>
                    <p className="text-gray-600">
                      info@psdecor.in
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                  <FaMapMarkerAlt className="text-pink-600 text-2xl" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      Firozabad, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 bg-green-50 border border-green-100 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <FaWhatsapp className="text-green-600 text-4xl" />
                  <h3 className="text-2xl font-bold text-gray-800">
                    Quick WhatsApp Quote
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Need an instant response? Send us your event details on
                  WhatsApp and our team will get back to you quickly.
                </p>

                <a
                  href="https://wa.me/917599208222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}