"use client";
import Layout from "../components/Layout";
import Main from "../components/Main"
import Footer from "../components/Footer";

export default function ProviderRedux() {
  return (
    <div>
      <Layout>
        {/*<Reservation_Main />*/}
        <Main />
      </Layout>

      {/* <Button className="w-10" onClick={() => toast.success("Welcome!!", {
        icon: <Suss/>
      })}>Clic</Button> */}
    </div>
  );
}
