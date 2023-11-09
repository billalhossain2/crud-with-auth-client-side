import React from 'react'

const Error = ({children}) => {
  return (
    <div>
        <p className='text-red-500 font-bold text-2xl text-center my-10'>{children}</p>
    </div>
  )
}

export default Error