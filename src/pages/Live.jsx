import Layout from "../components/Layout";
import LiveHero from "../components/live/LiveHero";
import StreamingPlatforms from "../components/live/StreamingPlatforms";
import LiveLocation from "../components/live/LiveLocation";
import LiveTestimonies from "../components/live/LiveTestimonies";

export default function Live() {
  return (
    <div className="bg-pageGrey overflow-x-clip">
      <Layout>
        <LiveHero />
        <StreamingPlatforms />
        <LiveLocation />
        <LiveTestimonies />
      </Layout>
    </div>
  );
}
