import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/userApi";
import { reservaApi } from "./services/reservaApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import reservaReducer from "./features/userSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import thunk from 'redux-thunk'

const persistConfig = {
   key: 'reserva',
   storage, 
   whitelist: ['reservaState'],
   serialize: (data) => JSON.stringify(data),
   deserialize: (data) => JSON.parse(data)
}

const rootReducer =  combineReducers ({
  reservaState: reservaReducer,
})

const persistedReducer= persistReducer(persistConfig, rootReducer) 

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [reservaApi.reducerPath]: reservaApi.reducer,
    reserva: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      [userApi.middleware],
      [reservaApi.middleware],
      [thunk],
    ),
}); 

setupListeners(store.dispatch);

const RootState = store.getState();
const AppDispatch = store.dispatch;

export { store, RootState, AppDispatch };
