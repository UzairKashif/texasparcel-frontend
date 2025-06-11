import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
interface PropertyCardProps {
  image: string
  title: string
  location: string
  price: string
  size: string
  type: string
}
export const PropertyCard = ({
  image,
  title,
  location,
  price,
  size,
  type,
}: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-52">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
          {type}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-gray-500 text-sm">Size</span>
            <p className="font-medium">{size}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Price</span>
            <p className="font-semibold text-green-700">{price}</p>
          </div>
        </div>
        <button className="w-full bg-white border border-green-700 text-green-700 hover:bg-green-50 py-2 rounded flex items-center justify-center transition-colors duration-300">
          View Details
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  )
}
