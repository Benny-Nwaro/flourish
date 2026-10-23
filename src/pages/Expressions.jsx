import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ExpressionsHero from "../components/expressions/ExpressionsHero";
import ExpressionList from "../components/expressions/ExpressionList";

export default function Expressions() {
  return (
    <div className="bg-pageGrey overflow-x-clip">
      <Layout>
        <Navbar />
        <ExpressionsHero />
        <ExpressionList />
      </Layout>
    </div>
  );
}
