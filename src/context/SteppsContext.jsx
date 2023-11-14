"use client"

import { createContext, useContext, useState } from "react";

export const SteppsContext = createContext();

export default function SteppsProvider({ children }) {
  const [step, setStep] = useState(0);

  function onHandleNext() {
    setStep((prevValue) => prevValue < 2 ? prevValue + 1 : prevValue);
  }

  function onHandleBack() {
    setStep((prevValue) => prevValue > 0 ? prevValue - 1: prevValue);
  }

  return (
    <SteppsContext.Provider value={{ onHandleNext, onHandleBack, step }}>
      {children}
    </SteppsContext.Provider>
  );
}


export function useSteppsState () {
  return useContext(SteppsContext);
}

