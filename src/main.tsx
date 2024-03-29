import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { accommodationReducer } from "./redux/reducers/accommodation";
import { Reducer } from "redux";
import { PayloadType } from "./types/accommodation";

const queryClient = new QueryClient();

const store = configureStore({
  reducer: accommodationReducer as Reducer<PayloadType>,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

export type AppDispatch = typeof store.dispatch;
