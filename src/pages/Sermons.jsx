import Layout from "../components/Layout";
import SermonsHero from "../components/sermons/SermonsHero";
import SermonList from "../components/sermons/SermonList";

export default function Sermons() {
  return (
    <div className="bg-pageGrey overflow-x-clip">
      <Layout>
        <SermonsHero />
        <SermonList />
      </Layout>
    </div>
  );
}
