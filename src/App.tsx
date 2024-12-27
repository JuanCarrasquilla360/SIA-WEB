import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MyFormSection from "./pages/PersonalDataForm";
// import PersonalInfo from "./components/PersonalInfo";
// import ResidenceContact from "./components/ResidenceContact";
// import ComplementaryData from "./components/ComplementaryData";
// import CourseSelection from "./components/CourseSelection";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/SIA-WEB">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="residence-contact"
            element={<Box height={200}>etst</Box>}
          />
          <Route path="complementary-data/:id" element={<MyFormSection />} />
          <Route path="course-selection" element={<>test3</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
