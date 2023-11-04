import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/userApi";
import { reservaApi } from "./services/reservaApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [reservaApi.reducerPath]: reservaApi.reducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware], [reservaApi.middleware]),
});

setupListeners(store.dispatch);

const RootState = store.getState();
const AppDispatch = store.dispatch;

export { store, RootState, AppDispatch };
