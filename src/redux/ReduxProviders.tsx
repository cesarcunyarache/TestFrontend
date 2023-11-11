"use client"
import { Provider } from "react-redux";
import { store } from "./store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

interface Props {
  children: React.ReactNode;
}
export default function ReduxProviders({ children }: Props) {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
}
