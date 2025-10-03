'use client'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import img1 from '../../../public/1.png'
import img2 from '../../../public/2.png'

const Checkout:React.FC = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: ''
  });

  interface OrderItems{
    id: number,
    name:string,
    price:number,
    image:StaticImageData
  }

  const [paymentMethod, setPaymentMethod] = useState<string>('cash');
  const [couponCode, setCouponCode] = useState<string>('');
  const [saveInfo, setSaveInfo] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent <HTMLInputElement>) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value
    });
  };

  const orderItems :OrderItems[] =  [
    {
      id: 1,
      name: 'LCD Monitor',
      price: 650,
      image: img1
    },
    {
      id: 2,
      name: 'H1 Gamepad',
      price: 1100,
      image: img2
    }
  ];

  const subtotal = 1750;
  const total = 1750;
  return (
    <div className="min-h-screen font-body pb-[140px] pt-[60px] bg-gray-50">
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <span>Account</span>
            <span className="mx-2">/</span>
            <span>My Account</span>
            <span className="mx-2">/</span>
            <span>Product</span>
            <span className="mx-2">/</span>
            <Link href="/cart">View Cart</Link>
            <span className="mx-2">/</span>
            <span className="text-black">CheckOut</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Billing Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={billingDetails.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={billingDetails.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Street Address*</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={billingDetails.streetAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Apartment, floor, etc. (optional)</label>
                <input
                  type="text"
                  name="apartment"
                  value={billingDetails.apartment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Town/City*</label>
                <input
                  type="text"
                  name="townCity"
                  value={billingDetails.townCity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Phone Number*</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={billingDetails.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Email Address*</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={billingDetails.emailAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>

              <div className="flex items-center space-x-3 mt-6">
                <input
                  type="checkbox"
                  id="saveInfo"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="saveInfo" className="text-sm text-gray-700">
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              
              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded flex items-center justify-center">
<Image src={item.image} alt="" />
                      </div>
                      <span className="text-gray-800">{item.name}</span>
                    </div>
                    <span className="text-gray-800">${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-800">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="text-gray-800">Free</span>
                </div>
                <div className="flex justify-between font-semibold pt-3 border-t border-gray-200">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="bank"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-red-500"
                  />
                  <label htmlFor="bank" className="text-gray-700 flex items-center space-x-2">
                    <span>Bank</span>
                    <div className="flex space-x-1">
                      <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">V</div>
                      <div className="w-8 h-5 bg-primary rounded text-white text-xs flex items-center justify-center font-bold">M</div>
                      <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">O</div>
                    </div>
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="cash"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-red-500"
                  />
                  <label htmlFor="cash" className="text-gray-700">
                    Cash on delivery
                  </label>
                </div>
              </div>

              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                />
                <button className="px-6 py-2 bg-primary text-white rounded hover:bg-red-600 transition duration-200">
                  Apply Coupon
                </button>
              </div>

              <button className="w-full bg-primary hover:bg-red-600 text-white font-medium py-3 rounded transition duration-200 mt-6">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout