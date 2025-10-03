import React from 'react'
import Container from '../Layout/Container';
import { Award, DollarSign, Headphones, Target, TrendingUp, Truck, Users } from 'lucide-react';
import Link from 'next/link';

const About = () => {
    const stats = [
    { icon: Users, value: '10.5k', label: 'Sellers active on our site' },
    { icon: Target, value: '33k', label: 'Monthly product sale' },
    { icon: Award, value: '45.5k', label: 'Customers active on our site' },
    { icon: TrendingUp, value: '25k', label: 'Annual gross sale on our site' }
  ];

  const team = [
    { name: 'Tom Cruise', role: 'Founder & Chairman' },
    { name: 'Emma Watson', role: 'Managing Director' },
    { name: 'Will Smith', role: 'Product Designer' }
  ];

  const features = [
    { icon: Truck, title: 'FREE AND FAST DELIVERY', desc: 'Free delivery for all orders over $140' },
    { icon: Headphones, title: '24/7 CUSTOMER SERVICE', desc: 'Friendly 24/7 customer support' },
    { icon: DollarSign, title: 'MONEY BACK GUARANTEE', desc: 'We return money within 30 days' }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Container>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-sm text-gray-600">
          <Link href="/" className="hover:text-pink-600 cursor-pointer">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">About</span>
        </div>
      </div>

      <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h4>
            <p className="text-gray-600 mb-4">
              Launched in 2015, Exclusive is South Asia premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
            </p>
            <p className="text-gray-600">
              Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-200 to-red-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-64 h-64 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 text-center hover:bg-primary hover:text-white hover:border-orange-500 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-300 group-hover:bg-white group-hover:bg-opacity-30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-gray-700  transition-all duration-300" />
                  </div>
                </div>
                <h4 className="text-3xl font-bold mb-2 text-gray-900 group-hover:text-white transition-all duration-300">
                  {stat.value}
                </h4>
                <p className="text-sm text-gray-600 group-hover:text-white transition-all duration-300">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 rounded-lg h-80 mb-6 flex items-center justify-center">
                <div className="text-gray-400">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <span className="text-sm">Team Member Image</span>
                </div>
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-1">{member.name}</h4>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      </Container>
    </div>
  );
}

export default About