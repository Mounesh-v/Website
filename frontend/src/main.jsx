import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import MotionProvider from "./Components/MotionProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MotionProvider>
      <App />
    </MotionProvider>
  </BrowserRouter>,
);
