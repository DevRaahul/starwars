import { useNavigate } from "react-router";
import { FaHeart } from "react-icons/fa";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between h-20 px-4 sm:px-6 bg-blue-400 shadow-md">
      <h1 className="w-full text-2xl p-2 font-medium" onClick={() => navigate("/")}>
        <span className="hover:cursor-pointer hover:text-white" role="button" tabIndex={0}>
          Star Verse
        </span>
      </h1>
      <Button variant="outline" className="hover:cursor-pointer hover:bg-gray-400 hover: border-none" onClick={() => navigate("/favourites")}>
        <FaHeart /> Favourite
      </Button>
    </div>
  );
};

export default Header;
