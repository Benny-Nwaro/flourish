import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import GiveHero from "../components/give/GiveHero";
import WaysToGive from "../components/give/WaysToGive";

export default function Give() {
  return (
    <div className="bg-pageGrey overflow-x-clip">
      <Layout>
        <div className="bg-white">
          <Navbar />
        </div>
        <GiveHero />
        <WaysToGive />
      </Layout>
    </div>
  );
}
