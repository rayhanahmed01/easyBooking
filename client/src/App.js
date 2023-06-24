import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/registration";
import { userInputs } from "./formSource";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/registration"
          element={

            <Registration inputs={userInputs} title="Registration" />

          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
