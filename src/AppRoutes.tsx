import { Routes, Route } from "react-router";
import Header from "./components/Header";
import TableContainer from "./components/TableContainer/TableContainer";
import PersonInfoComponent from "./components/PersonInfoComponent/PersonInfoComponent";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TableContainer />} />
        <Route path="/personInfo" element={<PersonInfoComponent />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
