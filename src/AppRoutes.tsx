import { Routes, Route } from "react-router";
import Header from "./components/Header";
import TableContainer from "./components/TableContainer/TableContainer";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TableContainer />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
