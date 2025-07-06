import { Routes, Route } from "react-router";
import Header from "./components/Header";
import TableContainer from "./components/TableContainer/TableContainer";
import PersonInfoContainer from "./components/PersonInfoContainer/PersonInfoContainer";
import FavouritesContainer from "./components/FavouritesContainer/FavouritesContainer";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TableContainer />} />
        <Route path="/personInfo" element={<PersonInfoContainer />} />
        <Route path="/favourites" element={<FavouritesContainer />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
