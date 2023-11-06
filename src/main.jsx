import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import AuthContextProvider from "./contexts/AuthContextProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./client/queryClient";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
