import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "App";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mocks/browser");
  return worker.start({ onUnhandledRequest: "bypass" });
}

const root = ReactDOM.createRoot(document.getElementById("root")!);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
