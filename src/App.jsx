import { useState } from "react";
import { Login } from "./pages/login.jsx";
import { Home } from "./pages/home.jsx";
import { DadosFixos } from "./pages/dados-fixos.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TabelaInicio } from "./pages/tabelas-inicio.jsx";
import { Estagio } from "./pages/estagio.jsx";
import { GroupEstagios } from "./pages/groupEstagios.jsx";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dados-fixos" element={<DadosFixos />}></Route>
          <Route path="/tabelas-inicio" element={<TabelaInicio />}></Route>
          <Route path="/estagio" element={<GroupEstagios />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
