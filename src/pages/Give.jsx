import Layout from "../components/Layout";
import Paystack from "../components/Paystack";
import Updates from "../components/Updates";
import MyExperience from "../components/MyExperience";
import Paysection from "../components/Paysection";
Paysection;

export default function Give() {
  return (
    <Layout>
      <Paysection />
      <Paystack />
      <MyExperience />
      <Updates />
    </Layout>
  );
}
