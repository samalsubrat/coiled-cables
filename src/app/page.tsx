import Link from "next/link";
import { MaxWidthWrapper } from "./components/MaxWidthWrapper";
import Image from "next/image";
import Slider from "./components/Slider";
import Performance from "./components/Performance";
import LongLife from "./components/LongLife";
import Features from "./components/Features";
import Aesthetic from "./components/Aesthetic";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-6xl">Arion Coiled Cables</h1>
        <p className="font-bold text-4xl bg-gradient-to-r from-indigo-300 to-indigo-700 bg-clip-text text-transparent mt-2">
          Efficient, aesthetic & durable
        </p>
      </MaxWidthWrapper>
      <Slider />
      <MaxWidthWrapper className="mb-28 mt-28 flex flex-col items-center justify-center text-center ">
        <div className="font-bold text-2xl">
          High performance, eye-catching, and durable cables that complement and
          match up to your mechanical keyboard’s performance, ensuring optimum
          connectivity & efficiency.
        </div>
      </MaxWidthWrapper>
      <Performance></Performance>
      <LongLife />
      <Features />
      <Aesthetic />
    </>
  );
}
