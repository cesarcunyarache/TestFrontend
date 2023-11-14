"use client";

import { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import SteppOne from "../../components/Stepper/Stepps/SteppOne";
import SteppTwo from "../../components/Stepper/Stepps/SteppTwo";
import SteppThree from "../../components/Stepper/Stepps/SteppThree";
import { useSelector } from "react-redux";
import { Stepper, Step, Button } from "@material-tailwind/react";

import { useSteppsState } from "../../context/SteppsContext";

export default function page() {
  const { step, onHandleNext, onHandleBack } = useSteppsState();

  const onSubmit = () => {
    onHandleNext();
  };

  const reserva = useSelector((state) => state.reserva);

  return (
    <Layout>
      <div className="h-[92vh] w-full bg-zinc-100 overflow-auto">
        <div className="max-w-3xl mx-auto ">
          <div className="pt-5 w-full px-4 ">
            <Stepper activeStep={step}>
              <Step>1</Step>
              <Step>2</Step>
              <Step>3</Step>
            </Stepper>
            <div className="my-6">
              <SteppOne className={`${step === 0 ? "" : "hidden"}`} />
              <SteppTwo className={`${step === 1 ? "" : "hidden"}`} />
              <SteppThree className={`${step === 2 ? "" : "hidden"}`} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
