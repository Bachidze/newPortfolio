import React from 'react'

export default function page() {
  return (
    <>
    <main className='flex flex-col justify-center items-center m-auto mt-8 mb-8'>
        <div className='mb-8'>
            <h1 className='text-[40px] font-bold leading-[42px] tracking-wide'>E-commerce</h1>
        </div>
        <div>
            <img className='w-[350px] h-[250px] rounded-xl border-2 border-[#dcdcdc] md:w-[500px] md:h-[500px] xl:w-[700px] xl:h-[500px]' src="/preview.jpg" alt="Ecommerce" />
        </div>
        <div className='text-center mt-8 break-all  w-[350px]'>
            <p className='text-[15px] leading-[30px] text-[#33323D]'>Realistic Challenge: The E-commerce project simulates a real-world scenario, which is invaluable for developers aiming to build their portfolio or prepare for job interviews. The complexity and depth of the project provide a comprehensive test of frontend skills.</p>
        </div>
        <div className='flex gap-6 mt-8'>
            <button className='border-2 border-[#33323D] pt-[10px] pb-[10px] pl-[62.5px] pr-[62.5px] text-[12px] leading-[14.1px] tracking-[2px] font-normal hover:bg-[#33323D] hover:text-white  duration-700 '><a href="https://github.com/Bachidze/GuruLevel">Code</a></button>
            <button className='border-2 border-[#33323D] pt-[10px] pb-[10px] pl-[62.5px] pr-[62.5px] text-[12px] leading-[14.1px] tracking-[2px] font-normal hover:bg-[#33323D] hover:text-white  duration-700'><a href="https://guru-level.vercel.app/">Live</a></button>
        </div>
    </main>
    </>
  )
}
