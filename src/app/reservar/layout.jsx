import SteppsProvider from "../../context/SteppsContext";

export default function layout({ children }) {
  return <SteppsProvider>{children}</SteppsProvider>;
}
