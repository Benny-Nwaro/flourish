import Layout from "../components/Layout";
import PaceHero from "../components/pace/PaceHero";
import AboutPace from "../components/pace/AboutPace";
import Achievements from "../components/pace/Achievements";
import Products from "../components/pace/Products";
import Mantra from "../components/pace/Mantra";
import PaceSocial from "../components/pace/PaceSocial";

export default function Pace() {
  return (
    <div className="bg-pageGrey overflow-x-clip">
      <Layout>
        <PaceHero />
        <AboutPace />
        <Achievements />
        <Products />
        <Mantra />
        <PaceSocial />
      </Layout>
    </div>
  );
}
