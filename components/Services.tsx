import React from 'react'
import { Map, BarChart2, Building, TrendingUp } from 'lucide-react'
import { services } from '../utils/data'
export const Services = () => {
  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Map':
        return <Map size={40} className="text-green-700" />
      case 'BarChart2':
        return <BarChart2 size={40} className="text-green-700" />
      case 'Building':
        return <Building size={40} className="text-green-700" />
      case 'TrendingUp':
        return <TrendingUp size={40} className="text-green-700" />
      default:
        return <Map size={40} className="text-green-700" />
    }
  }
  return (
    <section id="services" className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive land services to meet all your property needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
