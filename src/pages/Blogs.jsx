import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import BlogList from "../components/blog/BlogList";

export default function Blogs() {
  return (
    <div className="bg-pageGrey overflow-x-clip">
      <Layout>
        <Navbar />
        <BlogList />
      </Layout>
    </div>
  );
}
