import React from 'react'
import { User, Mail, Lock, Phone } from 'lucide-react'
export const SignUpForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add signup logic here
  }
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="flex items-center border-b border-gray-300 py-2">
          <User size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            required
            className="w-full bg-transparent focus:outline-none text-gray-900 font-light"
            placeholder="Full Name"
          />
        </div>
        <div className="flex items-center border-b border-gray-300 py-2">
          <Mail size={20} className="text-gray-400 mr-2" />
          <input
            type="email"
            required
            className="w-full bg-transparent focus:outline-none text-gray-900 font-light"
            placeholder="Email address"
          />
        </div>
        <div className="flex items-center border-b border-gray-300 py-2">
          <Phone size={20} className="text-gray-400 mr-2" />
          <input
            type="tel"
            required
            className="w-full bg-transparent focus:outline-none text-gray-900 font-light"
            placeholder="Phone Number"
          />
        </div>
        <div className="flex items-center border-b border-gray-300 py-2">
          <Lock size={20} className="text-gray-400 mr-2" />
          <input
            type="password"
            required
            className="w-full bg-transparent focus:outline-none text-gray-900 font-light"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="h-4 w-4 text-[#002f45] focus:ring-[#e3a750] border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
          I agree to the Terms of Service and Privacy Policy
        </label>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#002f45] hover:bg-[#002f45]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e3a750] transition-colors duration-300"
      >
        Create Account
      </button>
    </form>
  )
}
