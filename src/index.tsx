import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import UserStore from "./stores/user/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <UserStore>
    <App />
    </UserStore>
  </QueryClientProvider>
);
