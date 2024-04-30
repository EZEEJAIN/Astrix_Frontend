import Navbar from "@/components/Navbar";
import Homee from "@/sections/Home";
import StackHome from "@/sections/StackHome";

export default function Home() {
  return (
    <div className="flex justify-start items-start h-full w-full relative">
      <Homee />
      <div className="absolute top-0 left-[620px]">
      <StackHome />
      </div>
    </div>
  );
}
