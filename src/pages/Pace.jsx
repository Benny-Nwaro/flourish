import Layout from "../components/Layout";
import Apace from "../components/Apace";
import Achiements from "../components/Achiements";
import Products from "../components/Products";
import Mantra from "../components/Mantra";
import Social from "../components/Social";
import Updates from "../components/Updates";
import PstAma from "../components/PstAma";
PstAma;

export default function Pace() {
  return (
    <Layout>
      <PstAma />
      <Apace />
      <Achiements />
      <Products />
      <Mantra />
      <Social />
      <Updates />
    </Layout>
  );
}
