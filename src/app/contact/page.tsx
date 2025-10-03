'use client'
import React, { useState } from 'react'
import Container from '../Layout/Container'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const Contact: React.FC  = ()  => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };
  return (
        <div className="min-h-screen bg-white">
      <Container>
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-pink-600 cursor-pointer">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Contact</span>
          </div>
        </div>

        <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Call To Us
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    We are available 24/7, 7 days a week.
                  </p>
                  <p className="text-sm text-gray-900 font-medium">
                    Phone: +8801611112222
                  </p>
                </div>

                <hr className="my-8 border-gray-200" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Write To Us
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p className="text-sm text-gray-900 mb-2">
                    Emails: customer@exclusive.com
                  </p>
                  <p className="text-sm text-gray-900">
                    Emails: support@exclusive.com
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-gray-50 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-gray-50 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-gray-50 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary mb-6"
                  ></textarea>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-12 py-4 bg-primary text-white rounded hover:bg-red-600 transition font-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Contact