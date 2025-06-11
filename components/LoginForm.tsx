import React from 'react'
import { Mail, Lock } from 'lucide-react'
export const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add login logic here
  }
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <Mail size={20} className="text-gray-400 mr-2" />
            <input
              type="email"
              required
              className="w-full bg-transparent focus:outline-none text-gray-900 font-light"
              placeholder="Email address"
            />
          </div>
        </div>
        <div>
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
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#002f45] focus:ring-[#bcd4cc] border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-600"
          >
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-[#002f45] hover:text-[#e3a750]">
          Forgot your password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#002f45] hover:bg-[#002f45]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bcd4cc] transition-colors duration-300"
      >
        Sign in
      </button>
    </form>
  )
}
