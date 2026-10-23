import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PageIntro from "../components/PageIntro";
import MembershipForm from "../components/member/MembershipForm";

export default function BecomeMember() {
  return (
    <div className="bg-pageGrey overflow-x-clip">
      <Layout>
        <div className="bg-white">
          <Navbar />
        </div>
        <PageIntro title="Become a member" />
        <MembershipForm />
      </Layout>
    </div>
  );
}
