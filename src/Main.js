import App from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
