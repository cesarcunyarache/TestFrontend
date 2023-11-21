import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/userApi";
import { reservaApi } from "./services/reservaApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import reservaReducer from "./features/reservaSlice";

import thunk from "redux-thunk";
/* import storage from "redux-persist/lib/storage"; */
import { combineReducers } from "@reduxjs/toolkit";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();


const persistConfig = {
  key: "reserva",
  version: 1,
  storage,
  whitelist: ["reservaState"],
  serialize: (data) => JSON.stringify(data),
  deserialize: (data) => JSON.parse(data),
};

const rootReducer = combineReducers({
  reservaState: reservaReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [reservaApi.reducerPath]: reservaApi.reducer,
    reserva: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([userApi.middleware], [reservaApi.middleware], [thunk]),
});

setupListeners(store.dispatch);

const RootState = store.getState();
const AppDispatch = store.dispatch;
export default storage;
export { store, RootState, AppDispatch };
