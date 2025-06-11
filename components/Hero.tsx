import React from 'react'
import { Search, MapPin } from 'lucide-react'
export const Hero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center h-[600px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 47, 69, 0.7), rgba(0, 47, 69, 0.7)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')",
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Find Your Perfect Piece of Land
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Discover premium land opportunities for investment, development, or
          your dream home
        </p>
        <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow mb-3 md:mb-0 md:mr-3">
              <div className="flex items-center border border-gray-300 rounded-md px-4 py-3 bg-white">
                <MapPin size={20} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Location (City, State, or ZIP)"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="border border-gray-300 rounded-md px-4 py-3 bg-white text-[#002f45] hover:bg-[#bcd4cc]/10 transition-colors duration-300">
                Advanced Filters
              </button>
              <button className="bg-[#002f45] hover:bg-[#002f45]/90 text-white px-6 py-3 rounded-md flex items-center transition-colors duration-300">
                <Search size={20} className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
