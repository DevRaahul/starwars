import type { IPersonalDetails } from "@/constants/peopleInterface";

const PersonalDetails: React.FC<IPersonalDetails> = ({ person }) => {
  return (
    <>
      <p className="text-md font-semibold">Personal Info:</p>
      <div className="grid grid-cols-2 gap-2">
        <p>
          <span className="font-medium">Gender:</span> {person.gender}
        </p>
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
