import Container from '@/app/Layout/Container'
import Flex from '@/app/Layout/Flex'
import React from 'react'
import ProductCard from './ProductCard'
import { products } from '@/utils/products'
import Link from 'next/link'
import Button from '@/app/Layout/Button'
import CountdownTimer from './CountdownTimer'

const FlashSale = () => {
  return (
    <div className='font-body relative pb-[60px]'>
      <Container>
        <div className='text-primary  flex items-center justify-start '>
        <div className='w-5 h-10 rounded-sm bg-primary mr-4'></div>
    <span className='font-semibold'>Todays</span>
        </div>
        <Flex>
          <h3>Flash Sales</h3>
          <CountdownTimer/>
        </Flex>
        <Flex className="mb-[60px] items-start">
        {
          products.filter((p)=>p.status=="flashSale").slice(0,4).map((product)=>(
            <ProductCard key={product.id} product={product}/>
          ))
        }
        </Flex>
        <div className='text-center'>
          <Link href="/products/flashSale">
        <Button >View All Products</Button>
          </Link>

        </div>
<div className='xl:w-[1170px] w-full h-[1px] mx-auto absolute bottom-0 bg-black/30'></div>

      </Container>
    </div>
  )
}

export default FlashSale