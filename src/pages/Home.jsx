import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import Events from "../components/home/Events";
import Vision from "../components/home/Vision";
import MeetPastor from "../components/home/MeetPastor";
import FlourishSide from "../components/home/FlourishSide";
import OurExpressions from "../components/home/OurExpressions";
import GiveCta from "../components/home/GiveCta";
import starYellow from "../assets/figma/star-yellow.svg";
import doodleGreen from "../assets/figma/doodle-green.png";

export default function Home() {
  return (
    <div className="bg-pageGrey overflow-x-clip">
      <Layout>
        <div className="relative bg-white">
          {/* Decorations positioned from the Figma frame's top edge */}
          <img
            src={starYellow}
            alt=""
            width={84}
            height={84}
            className="absolute left-[-22.4px] top-[170.6px] w-[84px] h-[84px] pointer-events-none hidden xl:block"
          />
          <div className="absolute right-[-248.1px] top-[-38px] w-[457.124px] h-[445.179px] hidden xl:flex items-center justify-center pointer-events-none">
            <div className="relative w-[298.338px] h-[348.812px] rotate-[-54.63deg] overflow-hidden">
              <img
                src={doodleGreen}
                alt=""
                className="absolute max-w-none h-full w-[151.11%] left-[-51.11%] top-0"
              />
            </div>
          </div>
          <Navbar />
          <Hero />
        </div>
        <Welcome />
        <Events />
        <Vision />
        <MeetPastor />
        <FlourishSide />
        <OurExpressions />
        <GiveCta />
      </Layout>
    </div>
  );
}
