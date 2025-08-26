import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Users from "./components/Users.jsx";
import AddUser from "./components/AddUser.jsx";
import EditUser from "./components/EditUser.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<div>RTK Query Advanced Concept</div>} />
        <Route path="/user" element={<Users/>} />
        <Route path="/add-user" element={<AddUser/>} />
        <Route path="/edit-user/:id" element={<EditUser/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);
