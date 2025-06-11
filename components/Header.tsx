import React, { useState } from 'react'
import { Menu, X, Phone, UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-[#002f45]">
            Texas Parcels
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-[#002f45] font-medium"
          >
            Home
          </Link>
          <a
            href="#properties"
            className="text-gray-700 hover:text-[#002f45] font-medium"
          >
            Properties
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-[#002f45] font-medium"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-[#002f45] font-medium"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#002f45] font-medium"
          >
            Contact
          </a>
        </nav>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:+1234567890"
            className="flex items-center text-[#002f45] font-medium"
          >
            <Phone size={18} className="mr-2" />
            (123) 456-7890
          </a>
          <Link
            to="/login"
            className="flex items-center px-4 py-2 rounded-md bg-[#002f45] text-white hover:bg-[#002f45]/90 transition-colors duration-300"
          >
            <UserCircle size={18} className="mr-2" />
            Login
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#002f45] font-medium"
            >
              Home
            </Link>
            <a
              href="#properties"
              className="text-gray-700 hover:text-[#002f45] font-medium"
            >
              Properties
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#002f45] font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#002f45] font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#002f45] font-medium"
            >
              Contact
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center text-[#002f45] font-medium"
            >
              <Phone size={18} className="mr-2" />
              (123) 456-7890
            </a>
            <Link
              to="/login"
              className="flex items-center px-4 py-2 rounded-md bg-[#002f45] text-white hover:bg-[#002f45]/90 transition-colors duration-300"
            >
              <UserCircle size={18} className="mr-2" />
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
