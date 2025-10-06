import Layout from "../components/Layout";
import Gospel from "../components/Gospel";
import Countries from "../components/Countries";
import Updates from "../components/Updates";
import MyExperience from "../components/MyExperience";

export default function Expressions() {
  return (
    <Layout>
      <Gospel />
      <Countries />
      <MyExperience />
      <Updates />
    </Layout>
  );
}
