import { FaHeart } from "react-icons/fa";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-20 mx-auto px-3 bg-blue-400">
      <h1 className="w-full text-2xl font-medium">Star Verse</h1>
      <Button variant="outline">
        <FaHeart /> Favourite
      </Button>
    </div>
  );
};

export default Header;
