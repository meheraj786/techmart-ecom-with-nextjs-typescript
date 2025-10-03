'use client'
import { Minus, Plus } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import img1 from '../../../public/1.png'
import img2 from '../../../public/2.png'

const Cart: React.FC = () => {
interface CartItems {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: StaticImageData;
}
    const [cartItems, setCartItems]  = useState<CartItems[]>([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: img1,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: img2,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id : number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const shipping = 0;
  const total = subtotal + shipping;
    return (
    <div className="min-h-screen pb-[140px] pt-[60px] bg-gray-50">
      <div className="">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-black">Cart</span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-gray-200 font-medium text-gray-700">
            <div>Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-right">Subtotal</div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 gap-4 p-6 border-b border-gray-100 items-center"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-50 rounded flex items-center justify-center">
                  <Image src={item.image} alt="cart items" />
                </div>
                <span className="text-gray-800">{item.name}</span>
              </div>
              <div className="text-center text-gray-800">${item.price}</div>

              <div className="flex justify-center">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100 border-r"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="px-4 py-2 min-w-[50px] text-center">
                    {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100 border-l"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>

              <div className="text-right text-gray-800">
                ${item.price * item.quantity}
              </div>
            </div>
          ))}

          <div className="p-6 flex justify-between">
            <button className="px-6 py-2 font-bold border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition duration-200">
              Return To Shop
            </button>
            <button className="px-6 py-2 border font-bold border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition duration-200">
              Update Cart
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-start justify-between gap-x-[170px]">
          <div className="flex space-x-4 w-1/2">
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

          <div className="bg-white w-1/2 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Cart Total</h3>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-gray-800">${subtotal}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Shipping:</span>
                <span className="text-gray-800">Free</span>
              </div>

              <div className="flex justify-between py-2 font-semibold">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>

            <button className="w-full mt-6 px-6 py-3 bg-primary text-white rounded hover:bg-red-600 transition duration-200">
              <Link href="/checkout">
              Proceed to checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );;
};

export default Cart;
