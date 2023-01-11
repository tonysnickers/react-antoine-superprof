import * as React from "react";
import ErrorBoundary, { ErrorLayout } from "components/error-boundary/index";
//import Home from "pages/home";
//import Demo from "components/demo-react-hooks";
import Router from "./router";
import { useUser } from "./stores/user/context";

export default function App() {
  const { user, login, logout } = useUser();
  return (
    <ErrorBoundary fallback={<ErrorLayout />}>
      <nav>
        <button
          onClick={() =>
            user.isLogged
              ? logout()
              : login({
                  membershipValidUntil:
                    "Sun Jan 01 2024 20:27:03 GMT+0100 (Central European Standard Time)",
                })
          }
        >
          {user.isLogged ? "logout" : "login"}
        </button>
      </nav>
      <Router />
    </ErrorBoundary>
  );
}
