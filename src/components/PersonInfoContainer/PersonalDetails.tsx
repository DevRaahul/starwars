import { useState } from "react";
import type { IPersonalDetails } from "@/constants/peopleInterface";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { changeGender } from "@/store/feature/peopleSlice";

const PersonalDetails: React.FC<IPersonalDetails> = ({ person }) => {
  const dispatch = useAppDispatch();
  const [isEditable, setisEditable] = useState<boolean>(false);
  const [personGender, setPersonGender] = useState<string>(person.gender);

  const saveGender = (eve: React.KeyboardEvent<HTMLInputElement>) => {
    const { key, keyCode } = eve;
    if (key === "Enter" || keyCode === 13) {
      dispatch(changeGender({ person, personGender }));
      setisEditable(false);
    }
  };

  return (
    <>
      <p className="text-md font-semibold">Personal Info:</p>
      <div className="grid grid-cols-2 gap-2">
        {!isEditable && (
          <div className="flex gap-2 items-center">
            <p>
              <span className="font-medium">Gender:</span> {personGender}
            </p>
            <span className="hover:cursor-pointer" onClick={() => setisEditable(true)}>
              <FaRegEdit />
            </span>
          </div>
        )}
        {isEditable && (
          <>
            <div className="flex gap-2 items-center">
              <span className="font-medium">Gender:</span>
              <input
                value={personGender}
                onChange={(eve) => setPersonGender(eve.target.value)}
                onKeyDown={saveGender}
                className="w-auto min-w-0 px-1 py-0.5 border border-gray-300 rounded text-sm"
              />
            </div>
          </>
        )}
        <p>
          <span className="font-medium">Hair:</span> {person.hair_color}
        </p>
        <p>
          <span className="font-medium">Eyes:</span> {person.eye_color}
        </p>
        <p>
          <span className="font-medium">Planet:</span> {person.planet.name}
        </p>
      </div>
    </>
  );
};

export default PersonalDetails;
