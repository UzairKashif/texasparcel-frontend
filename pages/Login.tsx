import React from 'react'
import { LoginForm } from '../components/LoginForm'
import { Link } from 'react-router-dom'
export const Login = () => {
  return (
    <div className="min-h-screen bg-[#e3a750] bg-opacity-10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-light text-[#002f45] mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600 font-light">
            Sign in to access your portal
          </p>
        </div>
        <LoginForm />
        <div className="text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to="/signup" className="text-[#002f45] hover:text-[#e3a750]">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
