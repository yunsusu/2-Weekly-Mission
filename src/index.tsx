import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Main />
    </StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found in the document.");
}
