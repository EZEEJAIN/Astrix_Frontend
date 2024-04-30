import Navbar from "@/components/Navbar";
import Homee from "@/sections/Home";
import StackHome from "@/sections/StackHome";

export default function Home() {
  return (
    <div className="flex justify-start items-start h-full w-full">
      <Homee />
      <StackHome />
    </div>
  );
}
