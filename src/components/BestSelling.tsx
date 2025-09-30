import Container from '@/app/Layout/Container'
import Flex from '@/app/Layout/Flex'
import { products } from '@/utils/products'
import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'
import Button from '@/app/Layout/Button'


const BestSelling = () => {
  return (
    <div className='font-body relative pt-[60px] pb-[60px]'>
      <Container>
        <div className='text-primary mb-5 flex items-center justify-start '>
        <div className='w-5 h-10 rounded-sm bg-primary mr-4'></div>
    <span className='font-semibold'>This Month</span>
        </div>
        <Flex>
          <h3>Best Selling Products</h3>
          {/* <Button>
            View All
          </Button> */}
        </Flex>
        <Flex className="mb-[60px] items-start mt-[60px]">
        {
          products.filter((p)=>p.status=="bestSelling").slice(0,4).map((product)=>(
            <ProductCard key={product.id} product={product}/>
          ))
        }
        </Flex>
        <div className='text-center'>
          <Link href="/products/bestSelling">
        <Button>View All Products</Button>
</Link>
        </div>

      </Container>
    </div>
  )
}

export default BestSelling