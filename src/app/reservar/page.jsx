"use client";

import React from "react";
import Load from "../../components/Load";
import Layout from "../../components/Layout";
import Wizard from "../../components/Stepper/Wizzard";
import Reservation_Head from "../../components/Stepper/Stepps/Reservation_Head";
import Reservation_Body from '../../components/Stepper/Stepps/Reservation_Body'
import Reservation_Final from '../../components/Stepper/Stepps/Reservation_Final'


import {useSelector} from 'react-redux'
import { Stepper, Step, Button } from "@material-tailwind/react";

export default function page() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const display = (step) => {
    switch (step) {
      case 0:
        return <Reservation_Head/>;
      case 1:
        return <Reservation_Body/>;
      case 2:
        return <Reservation_Final/>;
    }
  };

 const reserva = useSelector( state => state.reserva);
 console.log(reserva);

  return (
    <Layout>
      {/* <div className="h-[92vh] bg-zinc-100 w-full">
        <div className="max-w-3xl mx-auto p-5 overflow-auto"> */}
      <div className="h-[92vh] w-full bg-zinc-100 overflow-auto">
        <div className="max-w-3xl mx-auto ">
          <div className="py-8 mx-6  w-full pr-10">
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step onClick={() => setActiveStep(0)}>1</Step>
            <Step onClick={() => setActiveStep(1)}>2</Step>
            <Step onClick={() => setActiveStep(2)}>3</Step>
          </Stepper>
          <div className="my-6">{display(activeStep)}</div>
          <div className="flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Anterior
            </Button>
            <Button onClick={handleNext} disabled={isLastStep}>
              Siguiente
            </Button>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
