import Link from "next/link";
const Navbar = () => {
  return (
    // <div className="flex mx-auto z-30 sticky max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-700 px-7 py-2 shadow-md backdrop-blur-lg transition-all">
    //   <div className="flex gap-5 items-center z-30">
    //       <Link href="/" className="flex z-40 font-regular">
    //          <span>Home</span>
    //        </Link>
    //        <Link href="/" className="flex z-40 font-regular">
    //         <span>Frost</span>
    //        </Link>
    //      <Link href="/" className="flex z-40 font-regular">
    //          <span>Coiled Cable</span>
    //        </Link>
    //       <Link href="/" className="flex z-40 font-regular">
    //         <span>Deskmat</span>
    //        </Link>
    //     </div>
    // </div>
    <nav className=" flex justify-center mx-auto max-w-fit sticky rounded-full border border-gray-900/20 bg-black/25 top-2 z-30 backdrop-blur-xl transition-all shadow-2xl shadow-white/5 ">
      <div className="inline-block fit-content text-gray-300 ease-in-out duration-300">
        <div className="flex gap-5 p-2 px-8 items-center z-30">
          <Link href="/" className="flex z-40 font-regular hover:font-semibold hover:text-white ease-in-out duration-300">
            Home
          </Link>
          <Link href="/" className="flex z-40 font-regular hover:font-semibold hover:text-white ease-in-out duration-300">
            Frost
          </Link>
          <Link href="/" className="flex z-40 font-regular hover:font-semibold hover:text-white ease-in-out duration-300">
            Coiled Cable
          </Link>
          <Link href="/" className="flex z-40 font-regular hover:font-semibold hover:text-white ease-in-out duration-300">
            Deskmat
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
