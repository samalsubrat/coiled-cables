import Image from "next/image";

const Performance = () => {
  return (
    <div className="flex relative justify-center mx-32 max-md:mx-5 max-lg:mx-10 max-xl:mx-16 max-lg:flex-col max-md:justify-center">
      <div className="flex overflow-hidden relative flex-col rounded-xl  justify-center font-bold h-3/5 min-h-full w-full max-lg:w-full max-sm:w-full mb-12 max-md:mx-0 max-sm:mr-0 max-sm:ml-0 shadow-white/10 shadow-md ">
        <div className="absolute inset-0 top-0">
          <Image
            src="/img-one.webp"
            alt="long-life"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-between max-w-full rounded-xl min-h-[600px] max-xl:items-center max-xl:justify-center max-2xl:items-center max-2xl:justify-center">
          <div className=" flex items-center justify-between z-10 px-20 flex-wrap max-2xl:items-center max-2xl:justify-center max-md:px-10">
            <div className="text-5xl font-bold leading-tight text-left max-2xl:text-center max-md:text-3xl">
              High Performance
              <br />
              Ultra-Fast Connectivity
            </div>
            <div className="text-2xl font-normal mt-8 max-w-[600px] text-center max-md:text-lg">
              Arion cables are built for <b>high performance gaming</b>,
              providing seamless <b>connectivity at high-speeds</b>. A long
              cable length of <b>1.5 Meters</b> ensures{" "}
              <b>hassle free connection</b> from the keyboard to the system.
            </div>
          </div>
          <div className="absolute z-0 left-0 bg-black opacity-50 max-sm:left-0 top-0 bottom-0 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
