import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Users from "./components/Users.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<div>RTK Query Advanced Concept</div>} />
        <Route path="/user" element={<Users/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);
