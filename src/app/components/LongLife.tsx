import Image from "next/image";

const LongLife = () => {
  return (
    <div className="mt-20">
    <div className="flex justify-center mx-32 gap-10 max-lg:flex-col max-md:justify-center max-md:mx-16">
        <div className="flex overflow-hidden relative flex-col rounded-xl  justify-center font-bold h-3/5 min-h-full w-2/4 max-lg:w-full max-sm:w-full mb-12 max-md:mx-0 max-sm:mr-0 max-sm:ml-0 shadow-white/10 shadow-md ">
          <div className="absolute inset-0 top-0">
            <Image
              src="/img-two.jpg"
              alt="long-life"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-full rounded-xl min-h-[600px]">
            <div className="z-10 px-44 max-md:px-10 max-2xl:px-10 max-sm:px-10">
              <div className="text-5xl font-bold text-yellow-300">
                Long Life
              </div>
              <div className="text-5xl font-bold text-green-300 mt-8">5X</div>
              <div className="text-2xl font-normal mt-8">
                The <strong>PET outer sleeve</strong> also ensures long cable
                life, with the coiled wire <strong>preventing damage</strong> to
                the cable due to overstretching without{" "}
                <strong>having a tangled mess.</strong>
              </div>
            </div>
            <div className="absolute z-0 left-0 bg-black opacity-50 max-sm:left-0 top-0 bottom-0 w-full"></div>
          </div>
        </div>

        <div className="flex overflow-hidden relative flex-col rounded-xl  justify-center font-bold h-3/5 min-h-full w-2/4 max-lg:w-full max-md:w-full max-sm:w-full mb-12 max-md:mx-0 max-sm:mx-0 shadow-white/10 shadow-md ">
          <div className="absolute inset-0 top-0">
            <Image
              src="/img-three.jpg"
              alt="long-life"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-full rounded-xl min-h-[600px] ">
            <div className="z-10 px-44 max-md:px-10 max-2xl:px-10 max-sm:px-10">
              <div className="text-5xl font-bold text-blue-300">Durability</div>
              <div className="text-5xl font-bold text-blue-300 mt-8">Tough</div>
              <div className="text-2xl font-normal mt-8">
                The detachable metal aviator connectors allow you to quickly
                detach your keyboard when required without disturbing the USB
                port, hence reducing wear and tear & enhancing durability.
              </div>
            </div>
            <div className="absolute z-0 left-0 bg-black opacity-50 max-sm:left-0 top-0 bottom-0 w-full"></div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default LongLife