import React from "react";
import { Route, Routes } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Info from "./components/Info";
import Form from "./components/Form";
import ApiPage from "./components/ApiPage";

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/info" element={<Info />} />
      <Route path="/form" element={<Form />} />
      <Route path="/api" element={<ApiPage />} />
    </Routes>
  );
}
