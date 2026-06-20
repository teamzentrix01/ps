import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <Image
        src="/images/hero.jpg"
        alt="Wedding"
        fill
        priority
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-12 lg:px-20 py-28">

        <p className="uppercase tracking-[6px] md:tracking-[10px] text-pink-200 text-xs md:text-sm mb-6">

          Luxury Wedding Planner

        </p>

        <h1 className="text-white font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.08] font-bold max-w-5xl mx-auto drop-shadow-2xl px-2">

          Crafting Timeless <br />
          Wedding Experiences

        </h1>

        <p className="mt-7 text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">

          Discover luxury venues, elegant decor, premium catering,
          photography and unforgettable wedding experiences crafted
          with perfection and style.

        </p>

      </div>
    </section>
  );
}