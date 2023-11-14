"use client"

import { ReactNode, createContext, useContext, useState } from "react";


interface ISteppsContext {
    onHandleNext: () => void,
    onHandleBack: () => void,
    step: number,
}
interface IProps {
  children: ReactNode;
}

const SteppsContext  = createContext<ISteppsContext>({
    onHandleNext: () => {},
    onHandleBack: () => {},
    step: 0,
});

export default function SteppsProvider({ children }: IProps) {
  
  const [step, setStep] = useState(0);

  function onHandleNext() {
    console.log(step);
    setStep((prevValue) => prevValue + 1);
  }

  function onHandleBack() {
    setStep((prevValue) => prevValue - 1);
  }
  return <SteppsContext.Provider value={{onHandleNext, onHandleBack, step}}>{children}</SteppsContext.Provider>;
}

export function useSteppsState () {
    return useContext(SteppsContext);
}
