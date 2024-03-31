import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Projects() {
  return (
    <>
      <section className="w-[90%] m-auto mb-20 max-w-[1920px]">
        <div>
          <h1 className="text-[40px] font-bold leading-[42px] tracking-wide">
            Projects
          </h1>
        </div>
      </section>
      <section className="mt-12 mb-24 w-[90%] max-w-[1920px] m-auto grid justify-center gap-14   md:grid-cols-2 xl:grid-cols-3 xl:gap-[90px] 2xl:gap-[90px]">
        <div>
          <Link href={"/ecommerce"}>
            <Image
              className="min-w-[320px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[320px] xl:min-w-[400px] xl:h-[320px]"
              alt="E-commerce"
              src={"/preview.jpg"}
              width={320}
              height={200}
            />
          </Link>
        </div>
        <div>
          <Link href={"/gallery"}>
            <Image
              className="min-w-[320px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[400px] xl:h-[300px]"
              alt="E-commerce"
              src={"/galleryslideshow.jpg"}
              width={320}
              height={200}
            />
          </Link>
        </div>
        <div>
          <Link href={"/entertainmentWebApp"}>
            <Image
              className="min-w-[320px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[400px] xl:h-[300px]"
              alt="E-commerce"
              src={"/entertaiment.jpg"}
              width={320}
              height={200}
            />
          </Link>
        </div>
        <div>
          <Link href={"/restAPI"}>
            <Image
              className="min-w-[320px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[400px] xl:h-[300px]"
              alt="E-commerce"
              src={"/desktop-preview.jpg"}
              width={320}
              height={200}
            />
          </Link>
        </div>
        <div>
          <Link href={"/restAPI"}>
            <Image
              className="min-w-[320px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[400px] xl:h-[300px]"
              alt="E-commerce"
              src={"/desktop-preview.jpg"}
              width={320}
              height={200}
            />
          </Link>
        </div>
        <div>
          <Link href={"/restAPI"}>
            <Image
              className="min-w-[320px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[400px] xl:h-[300px]"
              alt="E-commerce"
              src={"/desktop-preview.jpg"}
              width={320}
              height={200}
            />
          </Link>
        </div>
        <div>
          <Link href={"/restAPI"}>
            <Image
              className="min-w-[320px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[400px] xl:h-[300px]"
              alt="E-commerce"
              src={"/desktop-preview.jpg"}
              width={320}
              height={200}
            />
          </Link>
        </div>
        <div>
          <Link href={"/restAPI"}>
            <Image
              className="min-w-[320px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[400px] xl:h-[300px]"
              alt="E-commerce"
              src={"/desktop-preview.jpg"}
              width={320}
              height={200}
            />
          </Link>
        </div>
        <div>
          <Link href={"/restAPI"}>
            <Image
              className="min-w-[320px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[400px] xl:h-[300px]"
              alt="E-commerce"
              src={"/desktop-preview.jpg"}
              width={320}
              height={200}
            />
          </Link>
        </div>
        <div>
          <Link href={"/restAPI"}>
            <Image
              className="min-w-[320px] h-[200px] rounded-xl border-2 border-[#dcdcdc] md:min-w-[335px] xl:min-w-[400px] xl:h-[300px]"
              alt="E-commerce"
              src={"/desktop-preview.jpg"}
              width={320}
              height={200}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
