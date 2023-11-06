import React from 'react'

const Error = ({error}) => {
  return (
    <div>
        <p className='text-red-500 font-bold text-2xl text-center'>{error}</p>
    </div>
  )
}

export default Error