import React from 'react'
import { PropertyCard } from './PropertyCard'
import { properties } from '../utils/data'
export const FeaturedListings = () => {
  return (
    <section id="properties" className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium land opportunities
            across the country
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 6).map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              size={property.size}
              type={property.type}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-3 rounded-md transition-colors duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  )
}
