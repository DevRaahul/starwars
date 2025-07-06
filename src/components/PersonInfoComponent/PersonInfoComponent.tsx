import { useLocation } from "react-router";
import type { IPersonInfo } from "@/constants/interface";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";

const PersonInfoComponent = () => {
  const location = useLocation();
  const person: IPersonInfo = location.state;
  console.log("personInfo", person);

  return (
    <Card className="m-4 w-full max-w-sm mx-auto rounded-2xl shadow-md border">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="h-20 w-20 mb-2">
          <AvatarFallback>
            {person.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-center text-xl font-bold">{person.name}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {person.gender} — {person.birth_year}
        </p>
      </CardHeader>

      <CardContent className="text-sm text-gray-700 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <p>
            <span className="font-medium">Height:</span> {person.height} cm
          </p>
          <p>
            <span className="font-medium">Mass:</span> {person.mass} kg
          </p>
          <p>
            <span className="font-medium">Hair:</span> {person.hair_color}
          </p>
          <p>
            <span className="font-medium">Eyes:</span> {person.eye_color}
          </p>
          <p>
            <span className="font-medium">Skin:</span> {person.skin_color}
          </p>
          <p>
            <span className="font-medium">Homeworld:</span> {person.planet.name}
          </p>
        </div>

        <div className="pt-3 border-t">
          <h4 className="font-semibold text-gray-800">Planet Info</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm mt-1">
            <li>
              <span className="font-medium">Climate:</span> {person.planet.climate}
            </li>
            <li>
              <span className="font-medium">Terrain:</span> {person.planet.terrain}
            </li>
            <li>
              <span className="font-medium">Population:</span> {person.planet.population}
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonInfoComponent;
