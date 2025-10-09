import { PlayButton } from "../svg/svg";
import Navbar from "./Navbar";

export default function LivePst() {
  return (
    <section className="bg-sermons-hero flex flex-col items-start bg-no-repeat bg-cover h-full min-[400px]:h-[600px] md:h-[600px] xl:h-[800px]">
      <Navbar />
      <section className="flex flex-1 w-full justify-center items-center">
        <a
          href=""
          className="bg-[#B7B7B766] rounded-full w-[152px] h-[152px] animate-pulse flex justify-center items-center group cursor-pointer"
        >
          <div className="flex items-center justify-center bg-white rounded-full w-[106.05px] h-[105.45px]">
            <PlayButton />
          </div>
        </a>
      </section>
    </section>
  );
}
