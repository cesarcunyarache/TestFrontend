"use client";
import Layout from "../components/Layout";
import { toast } from "sonner";
import Button from "../components/Form/Button";
import Suss from "./Suss";
import Modal from '../components/Modal'

export default function ProviderRedux() {
  
  return (
    <div>
      <Layout></Layout>
      {/* <Button className="w-10" onClick={() => toast.success("Welcome!!", {
        icon: <Suss/>
      })}>Clic</Button> */}
      <Modal/>
    </div>
  );
}
