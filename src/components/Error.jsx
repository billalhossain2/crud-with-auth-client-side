import React from 'react'

const Error = ({error}) => {
  console.log('I am from error======> ', error)
  return (
    <div>
        <p className='text-red-500 font-bold text-2xl text-center my-10'>Something went wrong!</p>
    </div>
  )
}

export default Error