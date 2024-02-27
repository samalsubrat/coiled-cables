import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="flex overflow-hidden relative flex-col rounded-xl  justify-center font-bold h-[600px] min-h-[534px] mb-12 mx-44 max-2xl:mx-32 max-md:mx-5 max-lg:mx-10 max-xl:mx-16  shadow-white/10 shadow-md">
        <div className="absolute inset-0 size-full top-0">
          <Image
            src="/carou-one.webp"
            alt="..."
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
          />
        </div>

        <div className="flex flex-col relative justify-center items-start  max-w-full rounded-xl w-[950px] max-md:px-5 max-sm:px-10 z-100">
          <div className="flex flex-col my-auto ml-8 max-w-full px-16 py-12 w-[460px] max-lg:px-4 max-lg:ml-4 max-md:mt-10 max-md:px-4 max-md:ml-2 absolute z-10 max-sm:left-[-15px] max-sm:px-10">
            <div className="text-4xl font-medium max-md:max-w-full z-100 max-md:text-3xl max-sm:text-3xl max-lg:text-3xl max-sm:text-center max-md:text-center">
              Cables as amazing as your mechanical keyboards
              <br />
            </div>
            <div className="mt-3.5 text-5xl font-xl  max-md:max-w-full max-md:text-4xl max-sm:text-4xl max-sm:text-center max-md:text-center">
              ₹1600
            </div>
            <Link
              className={buttonVariants({
                size: "lg",
                className: "mt-5",
              })}
              href="https://www.meckeys.com/shop/accessories/cables/meckeys-coiled-cable/"
              target="_blank"
            >
              Buy Now <ArrowRight className="ml-2 mr-0 h-5 w-5" />
            </Link>
          </div>
          <div className="p-96 left-0 bg-gradient-to-r from-black from-20% opacity-70 absolute z-0 max-sm:left-0 max-sm:opacity-75"></div>
        </div>
      </div>
  )
}

export default Slider