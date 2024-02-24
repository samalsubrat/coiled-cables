import Image from "next/image"

const Aesthetic = () => {
  return (
    <div className="flex overflow-hidden relative flex-col rounded-xl  justify-center font-bold h-[600px] min-h-[534px] mx-32 max-md:mx-5 max-lg:mx-10 max-xl:mx-16 shadow-white/10 shadow-md">
    <div className="absolute inset-0 size-full top-0">
      <Image
        src="/carou-two.jpg"
        alt="..."
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
    <div className="flex flex-col relative justify-center items-start  max-w-full rounded-xl w-[950px] max-md:px-5 max-sm:px-10 z-100">
      <div className="flex flex-col my-auto ml-8 max-w-full px-16 py-12 w-[600px] max-lg:px-4 max-lg:ml-4 max-md:mt-10 max-md:px-4 max-md:ml-2 absolute z-10 max-sm:left-[-15px] max-sm:px-10">
        <div className="text-5xl font-medium max-md:max-w-full z-100 max-md:text-3xl  max-sm:text-center max-md:text-center">
          Made for the
          <br />
        </div>
        <div className="mt-3.5 text-5xl font-xl  max-md:max-w-full max-md:text-4xl  max-md:text-center">
        Aesthetic Eye
        </div>
        <div className="text-2xl font-medium mt-3.5 text-left max-md:text-center">Available with a host of color options that complement any keyboard.</div>
      </div>
      <div className="p-96 left-0 bg-gradient-to-r from-black from-20% opacity-60 absolute z-0 max-sm:left-0 max-sm:opacity-75"></div>
    </div>
  </div>
  )
}

export default Aesthetic