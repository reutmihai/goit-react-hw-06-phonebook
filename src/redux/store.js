import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./slices/contactsSlice";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"], 
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
