// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import reservationSlice from "./features/reservationSlice";
// import { TypedUseSelectorHook, useSelector } from "react-redux";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";

// const persistConfig = { key: "rootPersist ", storage };
// const rootReducer = combineReducers({ reservationSlice });
// const reduxPersistedStore = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: reduxPersistedStore,
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
