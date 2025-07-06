import { useEffect, useMemo, useState, type JSX } from "react";
import { useNavigate } from "react-router";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import type { IPersonalDetails } from "@/constants/peopleInterface";
import { CardTitle } from "../ui/card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFavourite } from "@/store/feature/favouriteSlice";

const CardHeaderInfo: React.FC<IPersonalDetails> = ({ person }) => {
  const navigate = useNavigate();
  const { value } = useAppSelector((state) => state.favourites);
  const dispatch = useAppDispatch();
  const [isFav, setIsFav] = useState(false);

  useEffect(()=>{
    
  },[value]);

  const isCharacterFavourite = (list) => {
    list.filter((fav) => fav.uid === person.uid
  };

  const addToFavourite = () => {
    dispatch(addFavourite(person));
  };

  const icon: JSX.Element = useMemo(() => {
    if (value.length > 0 && data[0].uid === person.uid) {
      return <FaHeart />;
    }
    return <FaRegHeart />;
  }, [value]);

  return (
    <>
      <div className="flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary underline cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button variant="outline" className="hover:cursor-pointer" onClick={addToFavourite}>
          {icon}
        </Button>
      </div>

      <div className="flex flex-col items-center">
        <Avatar className="h-20 w-20 mb-2">
          <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random`} alt={person.name} />
        </Avatar>
        <CardTitle className="text-center text-xl font-bold">{person.name}</CardTitle>
        <p className="text-sm text-gray-500">Birth Year — {person.birth_year}</p>
      </div>
    </>
  );
};

export default CardHeaderInfo;
