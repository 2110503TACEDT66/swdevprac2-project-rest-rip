import React from 'react'

const Banner = () => {
  return (
    <div className='bg-slate-700 my-4 mx-6 rounded-xl p-6 flex justify-between' style={{minHeight: "88vh"}}>
      <div className='flex flex-col justify-start'>
        <h1 className='font-semibold text-4xl'>CO-Woring Spaces for you</h1>
        <h2 className='my-6 pr-10'>Step into productivity with our private office space in Thailand. Our fully equipped offices offer the perfect blend of comfort and functionality, allowing you to work efficiently and effectively. Rent space on your terms and concentrate on achieving your business objectives with us by your side.</h2>
        <h1 className='font-semibold my-6 text-xl'>What do we provide for you:</h1>
        <ul className='space-y-2'>
          <li>- Many private working space with necessary facilities</li>
          <li>- Friendly UX/UI for users</li>
          <li>- 24/7 help services</li>
        </ul>
        <button className='bg-red-700  px-4 py-2 rounded-lg w-1/3 my-10'>Reserve Now</button>
        <h1 className=' my-6 text-md'>Call us at +66 1 212 3121</h1>
      </div>

      <img className='w-1/2 h-auto rounded-xl' src='images/cover.jpg'/>
    </div>
  )
}

export default Banner
