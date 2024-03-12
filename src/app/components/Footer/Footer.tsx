import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <>
    <section className='bg-[#33323D] flex flex-col justify-center items-center pt-14 pb-14'>
        <div>
        <img src="/WhieDoubleArrow.svg" alt="Arrow2" />
        </div>
        <div className='text-center text-white pt-10 pb-10 flex flex-col gap-8'>
            <Link href={"/Home"}><h2 className="text-[12px] leading-[14.1px]">HOME</h2></Link>
            <Link href={"/portfolio"}><h2 className="text-[12px] leading-[14.1px]">PORTFOLIO</h2></Link>
            <Link href={"/contact"}><h2 className="text-[12px] leading-[14.1px]">CONTACT US</h2></Link>
        </div>
        <div className='flex gap-4'>
            <img src="/WhiteRename.svg" alt="icon" />
            <img src="/WhiteTwitter.svg" alt="icon" />
            <img src="/WhiteLinkdein.svg" alt="icon" />
        </div>
    </section>
    </>
  )
}
