import Image from "next/image"

const Features = () => {
  return (
    <div className="flex bg-transparent px-32 items-start justify-center gap-32 w-full flex-wrap my-20 max-sm:gap-16 max-sm:px-24">
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            src="/wire.svg"
            alt="..."
            width={117}
            height={117}
            objectFit="cover"
            priority
          ></Image>
          <div className="text-lg mt-4 mb-2">Wire Length</div>
          <div className="text-zinc-500">
            150cm (Straight) <br /> 15cm (Coiled)
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            src="/sleeve.svg"
            alt="..."
            width={117}
            height={117}
            objectFit="cover"
            priority
          ></Image>
          <div className="text-lg mt-4 mb-2">Sleeve</div>
          <div className="text-zinc-500">PET</div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            src="/Copper.svg"
            alt="..."
            width={117}
            height={117}
            objectFit="cover"
            priority
          ></Image>
          <div className="text-lg mt-4 mb-2">Wire Material</div>
          <div className="text-zinc-500">Pure Copper</div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            src="/Connector.svg"
            alt="..."
            width={117}
            height={117}
            objectFit="cover"
            priority
          ></Image>
          <div className="text-lg mt-4 mb-2">Connector</div>
          <div className="text-zinc-500">
            Avaitor
            <br />
            (Detachable)
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <Image
            src="/usb.svg"
            alt="..."
            width={88}
            height={90}
            objectFit="cover"
            priority
          ></Image>
          <div className="text-lg mt-4 mb-2">USB Header</div>
          <div className="text-zinc-500">USB A to USB C</div>
        </div>
      </div>
  )
}

export default Features