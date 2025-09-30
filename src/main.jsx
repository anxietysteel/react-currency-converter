import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import Wrapper from "./components/Wrapper.jsx";
import Form from "./components/Form.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Wrapper>
      <Form />
    </Wrapper>
  </StrictMode>
);
