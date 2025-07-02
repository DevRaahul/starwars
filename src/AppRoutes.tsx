import { Routes, Route } from "react-router";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import TableContainer from "./components/TableContainer/TableContainer";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TableContainer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
