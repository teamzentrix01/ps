import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed right-6 bottom-10 z-50 flex flex-col gap-4">

      <a
        href="tel:+917599208222"
        className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl"
      >
        <FaPhoneAlt />
      </a>

      <a
        href="https://wa.me/917599208222"
        className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}