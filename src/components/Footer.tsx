import React from 'react'
import Logo from './Logo'
import Container from '@/app/Layout/Container'

const Footer: React.FC = () => {
  return (
      <div className='bg-black pt-[80px] pb-[60px] text-white py-30 font-body'>
    <Container>
      <div className="grid grid-cols-5 gap-8">
        <div className=''>
          <Logo className="text-white"/>
          <h4 className='text-[20px] font-medium mt-6'>Subscribe</h4>
          <p className='mt-6 mb-4'>Get 10% off your first order</p>
          <div className='relative'>
            <input 
              type="text" 
              className='px-4 border border-white bg-transparent rounded-[4px] py-3 text-white placeholder-white/40 w-full' 
              placeholder='Enter your email' 
            />
            <button className='absolute right-2 top-1/2 transform -translate-y-1/2'>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m5 12 14 0"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div className=''>
          <h4 className='text-[20px] font-medium mb-6'>Support</h4>
          <div className='space-y-4'>
            <p className='text-white/80'>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
            <p className='text-white/80'>exclusive@gmail.com</p>
            <p className='text-white/80'>+88015-88888-9999</p>
          </div>
        </div>

        <div className=''>
          <h4 className='text-[20px] font-medium mb-6'>Account</h4>
          <ul className='space-y-4'>
            <li><a href="#" className='text-white/80 hover:text-white transition-colors'>My Account</a></li>
            <li><a href="#" className='text-white/80 hover:text-white transition-colors'>Login / Register</a></li>
            <li><a href="#" className='text-white/80 hover:text-white transition-colors'>Cart</a></li>
            <li><a href="#" className='text-white/80 hover:text-white transition-colors'>Wishlist</a></li>
            <li><a href="#" className='text-white/80 hover:text-white transition-colors'>Shop</a></li>
          </ul>
        </div>

        {/* Column 4 - Quick Link */}
        <div className=''>
          <h4 className='text-[20px] font-medium mb-6'>Quick Link</h4>
          <ul className='space-y-4'>
            <li><a href="#" className='text-white/80 hover:text-white transition-colors'>Privacy Policy</a></li>
            <li><a href="#" className='text-white/80 hover:text-white transition-colors'>Terms Of Use</a></li>
            <li><a href="#" className='text-white/80 hover:text-white transition-colors'>FAQ</a></li>
            <li><a href="#" className='text-white/80 hover:text-white transition-colors'>Contact</a></li>
          </ul>
        </div>

        <div className=''>
          <h4 className='text-[20px] font-medium mb-6'>Download App</h4>
          <p className='text-white/60 text-sm mb-4'>Save $3 with App New User Only</p>
          
          <div className='flex gap-2 mb-6'>
            <div className='w-20 h-20 bg-white p-2 rounded'>
              <div className='w-full h-full bg-black'></div> {/* QR Code placeholder */}
            </div>
            <div className='flex flex-col gap-2'>
              <div className='bg-black border border-white rounded px-3 py-1 flex items-center gap-2'>
                <div className='w-6 h-6 bg-white rounded'></div>
                <div>
                  <p className='text-xs text-white/60'>GET IT ON</p>
                  <p className='text-sm font-medium'>Google Play</p>
                </div>
              </div>
              <div className='bg-black border border-white rounded px-3 py-1 flex items-center gap-2'>
                <div className='w-6 h-6 bg-white rounded'></div>
                <div>
                  <p className='text-xs text-white/60'>Download on the</p>
                  <p className='text-sm font-medium'>App Store</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-6'>
            <a href="#" className='text-white/60 hover:text-white transition-colors'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className='text-white/60 hover:text-white transition-colors'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.744-1.378l-.628 2.43c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            <a href="#" className='text-white/60 hover:text-white transition-colors'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className='text-white/60 hover:text-white transition-colors'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className='border-t border-white/20 mt-16 pt-4 text-center'>
        <p className='text-white/40 text-sm'>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </Container>
  </div>
  )
}

export default Footer