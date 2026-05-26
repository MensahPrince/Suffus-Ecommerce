"use client"
import { useState } from "react"

export default function SearchBar() {
  const [query, setQuery] = useState("")

  async function handleSearch() {
    if (!query.trim()) return
    const res = await fetch(`/api/amazon/search?query=${encodeURIComponent(query)}`)
    const data = await res.json()
    console.log(data)
  }

  return (
    <div className="flex flex-1 max-w-xl items-center border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search products…"
        className="flex-1 px-3 py-2 text-sm outline-none bg-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white text-sm px-4 py-2 hover:bg-gray-800 transition"
      >
        Search
      </button>
    </div>
  )
}