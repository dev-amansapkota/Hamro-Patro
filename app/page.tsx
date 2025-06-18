import Header from "@/components/Header";
import HeroSecton from "@/components/HeroSecton";
import GetNepaliCalender from "@/components/UI/getNepaliDateAndTme";

export default function Home() {
  return (
    <>
    <div>
      <Header/>
      <HeroSecton/>
     <GetNepaliCalender/>
    </div>
    <div className=" text-center">
      <h2 className="text-black">Coming soon... Stay Tuned</h2>
      <h1 className="text-3xl text-bold  bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent font-bold">MAde by Aman Sapkota</h1>
    </div>
    </>
  );
}
