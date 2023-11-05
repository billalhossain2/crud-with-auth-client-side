import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5'>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  )
}

export default Products