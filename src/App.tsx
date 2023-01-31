import MultiStepForm from "pages/MultiStepForm/MultiStepForm";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pokemon from "./pages/Pokemon/Pokemon";
import UploadFile from "./pages/UploadFile/UploadFile";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="uploadfile" element={<UploadFile />} />
        <Route path="multi-step-form" element={<MultiStepForm />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </>
  );
}
