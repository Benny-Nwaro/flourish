import { Link } from "react-router";
import Layout from "../components/Layout";

export default function Oops() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-h2 text-black mb-4">404 - Page Not Found</h1>
        <p className="text-body text-black max-w-md mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="rounded-[29px] bg-brandBlue px-8 py-4 font-stemBold text-white hover:bg-lightBlue hover:text-brandBlue transition-colors"
        >
          Return Home
        </Link>
      </div>
    </Layout>
  );
}
