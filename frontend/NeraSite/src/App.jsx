//import { useState } from 'react'
import "./styles/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import AdminHome from "./pages/admin/AdminHome";
import AdminLayout from "./pages/admin/AdminLayout";
import ProtectedRoute from "./pages/admin/ProtectedRoute";

import Pesquisadores from "./pages/admin/Pesquisadores";
import Relatorios from "./pages/admin/Relatorios";
import Incidentes from "./pages/admin/Incidentes";
import Organismo from "./pages/admin/Organismo";
import Thalassa from "./pages/admin/Thalassa";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />

          <Route element={<ProtectedRoute nivelMinimo={1} />}>
            <Route path="pesquisadores" element={<Pesquisadores />} />

            <Route path="relatorios" element={<Relatorios />} />
          </Route>

          <Route element={<ProtectedRoute nivelMinimo={2} />}>
            <Route path="incidentes" element={<Incidentes />} />

            <Route path="organismo" element={<Organismo />} />
          </Route>

          <Route element={<ProtectedRoute nivelMinimo={3} />}>
            <Route path="thalassa" element={<Thalassa />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
