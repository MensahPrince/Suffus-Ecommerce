import type { Metadata } from "next"
import { Search } from "lucide-react"
import "./globals.css"


import SearchBar from "@/components/search"
export const metadata: Metadata = {
  title: "NetClient App",
  description: "A netflix client app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-black">

        {/* ===================== */}
        {/* TOP UTILITY NAV */}
        {/* ===================== */}
        <nav className="w-full border-b border-gray-100 text-xs text-gray-600">

          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-1">

            {/* Left */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-black">Help</a>
              <a href="#" className="hover:text-black">Support</a>
            </div>

            {/* Center (Country + Currency) */}
            <div className="flex items-center gap-3">

              <select className="bg-transparent outline-none cursor-pointer">
                <option>Ghana</option>
                <option>USA</option>
                <option>UK</option>
              </select>

              <select className="bg-transparent outline-none cursor-pointer">
                <option>GHS ₵</option>
                <option>USD $</option>
                <option>EUR €</option>
              </select>

            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-black">Orders</a>
              <a href="#" className="hover:text-black">Account</a>
              <a href="#" className="hover:text-black">Login</a>
            </div>

          </div>
        </nav>

        {/* ===================== */}
        {/* MAIN NAV (Stuffus) */}
        {/* ===================== */}
        <nav className="w-full bg-white border-b border-gray-200 px-6 py-3">

          <div className="max-w-6xl mx-auto flex items-center gap-4">

            {/* Logo */}
            <span className="font-bold text-lg whitespace-nowrap">
              Stuffus
            </span>

            {/*Search Bar*/}
            <SearchBar />

            {/* Links */}
            <div className="flex items-center gap-1 ml-auto">

              <a href="#" className="text-sm text-gray-500 hover:text-black px-3 py-1.5 rounded-lg hover:bg-gray-100 transition">
                Deals
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-black px-3 py-1.5 rounded-lg hover:bg-gray-100 transition">
                Laptops
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-black px-3 py-1.5 rounded-lg hover:bg-gray-100 transition">
                Gaming
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-black px-3 py-1.5 rounded-lg hover:bg-gray-100 transition">
                Accessories
              </a>

            </div>

          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  )
}