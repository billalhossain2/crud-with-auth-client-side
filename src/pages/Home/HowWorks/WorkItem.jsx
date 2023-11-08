import React from 'react'

const WorkItem = ({work:{icon, title, description}}) => {
  return (
    <div className='flex flex-col items-center text-center gap-5 border-[1px] border-solid border-blue-200 hover:border-blue-500 p-5 rounded-lg'>
        <img src={icon} alt="" />
        <h3 className='text-2xl text-gray-700'>{title}</h3>
        <p className='text-gray-400'>{description}</p>
    </div>
  )
}

export default WorkItem