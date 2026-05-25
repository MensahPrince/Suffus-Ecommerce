import Image from "next/image"
import SuggestionCard from "@/card/suggestion"

export default function HomePage() {
  return (
    <>
      <div className="min-h-[70vh] w-full flex flex-col items-center justify-center px-2">

        <div className="h-[60vh] w-[80%] bg-blue-100 rounded-lg flex flex-col lg:flex-row items-center gap-2 p-4 mt-20">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 p-3 text-center lg:text-left">

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              SHOP COMPUTERS &amp; ACCESSORIES
            </p>

            <p className="mt-2 text-sm text-gray-700">
              Find the best laptops, desktops, and accessories for work, gaming, and creativity.
            </p>

            <button className="mt-3 px-4 py-2 bg-black text-white rounded-md text-sm">
              Shop Now
            </button>

          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 p-2 flex justify-center items-center">

            <div className="relative flex items-center justify-center">

              <div className="absolute w-48 h-48 bg-blue-300/30 blur-2xl rounded-full" />

              <Image
                src="/card.jpeg"
                width={100}
                height={100}
                alt="Card"
                className="z-5 absolute left-[-20%] bottom-[-10%] rotate-12 hover:scale-105 transition"
              />
              <Image
                src="/headset.png"
                alt="Gaming headset"
                width={240}
                height={240}
                style={{ height: "auto" }}
                className="relative object-contain drop-shadow-md hover:scale-105 transition"
              />

            </div>

          </div>

        </div>

        <SuggestionCard />

      </div>
      
    </>
  )
}