import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Box } from "@mui/material";
import MyFormSection from "./pages/PersonalDataForm";
import Home from "./pages/Home";
// import PersonalInfo from "./components/PersonalInfo";
// import ResidenceContact from "./components/ResidenceContact";
// import ComplementaryData from "./components/ComplementaryData";
// import CourseSelection from "./components/CourseSelection";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="residence-contact"
            element={<Box height={200}>etst</Box>}
          />
          <Route path="complementary-data" element={<MyFormSection />} />
          <Route path="course-selection" element={<>test3</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
