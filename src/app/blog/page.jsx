import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function BlogPage() {
  const blogs = [
    {
      title: "Top Wedding Decoration Trends for 2026",
      date: "June 10, 2026",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop&q=80",
      excerpt:
        "Discover the latest wedding décor trends including floral ceilings, luxury lighting, and personalized wedding experiences.",
    },
    {
      title: "How to Choose the Perfect Wedding Venue",
      date: "May 28, 2026",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80",
      excerpt:
        "Choosing the right venue is one of the most important wedding decisions. Here's what you need to consider.",
    },
    {
      title: "Budget-Friendly Decoration Ideas",
      date: "May 15, 2026",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&auto=format&fit=crop&q=80",
      excerpt:
        "Create a stunning celebration without overspending using these smart decoration ideas and planning tips.",
    },
    {
      title: "5 Stunning Engagement Decoration Themes",
      date: "April 30, 2026",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&auto=format&fit=crop&q=80",
      excerpt:
        "From romantic floral themes to modern luxury setups, explore engagement décor ideas that impress.",
    },
    {
      title: "Outdoor Wedding Planning Guide",
      date: "April 12, 2026",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80",
      excerpt:
        "Everything you need to know about planning a memorable outdoor wedding celebration.",
    },
    {
      title: "Luxury Reception Decoration Inspirations",
      date: "March 25, 2026",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&auto=format&fit=crop&q=80",
      excerpt:
        "Get inspired by elegant reception décor ideas that create unforgettable guest experiences.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-rose-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-pink-600">Blog</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Wedding inspiration, décor ideas, venue tips, and expert advice
            from the PS Decor team.
          </p>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-gray-50 rounded-3xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&auto=format&fit=crop&q=80"
              alt="Featured Blog"
              className="h-full min-h-[350px] w-full object-cover"
            />

            <div className="p-8 md:p-12">
              <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Featured Article
              </span>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Top Wedding Decoration Trends for 2026
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Explore the most elegant wedding decoration styles, luxury
                floral arrangements, statement lighting, and personalized
                themes that are shaping modern weddings.
              </p>

              <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <FaCalendarAlt />
                    {blog.date}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-5">
                    {blog.excerpt}
                  </p>

                  <button className="flex items-center gap-2 text-pink-600 font-medium hover:text-pink-700 transition">
                    Read More
                    <FaArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>

          <p className="text-pink-100 mb-8">
            Get the latest wedding décor inspiration, venue ideas, and event
            planning tips directly from PS Decor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full outline-none bg-white"
            />

            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}