
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";

// Landing page. Opens App.js 
const Index = () => {
  return (
    <>
      <App />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Index tab="home" />);
