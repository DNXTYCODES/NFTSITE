import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3  '>
      {/* <p className='prata-regular '>{text1} <span className='prata-regular'>{text2}</span></p> */}
      <p className='text-3xl font-extrabold sm:text-4xl  text-[#43284b]'>{text1} <span className='text-3xl font-extrabold sm:text-4xl  text-[#ff956f]'>{text2}</span></p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] '></p>
    </div>
  )
}

export default Title
