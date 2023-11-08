import React from 'react'
import ProductCard from './ProductCard'

const Products = ({category}) => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
      {
        category?.map(jobItem => <ProductCard key={jobItem._id} jobItem={jobItem}></ProductCard>)
      }
    </div>
  )
}

export default Products