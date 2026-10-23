import Layout from "../components/Layout";
import AboutHero from "../components/about/AboutHero";
import AboutCards from "../components/about/AboutCards";
import Testimonies from "../components/about/Testimonies";
import OurApproach from "../components/about/OurApproach";

export default function About() {
  return (
    <div className="bg-pageGrey overflow-x-clip">
      <Layout>
        <AboutHero />
        <AboutCards />
        <Testimonies />
        <OurApproach />
      </Layout>
    </div>
  );
}
