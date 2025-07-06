import { useLocation, useNavigate } from "react-router";
import type { IPersonInfo } from "@/constants/interface";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

const PersonInfoComponent = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const person: IPersonInfo = location.state;
  console.log("personInfo", person);

  return (
    <Card className="w-full m-4 max-w-sm mx-auto rounded-2xl shadow-md border">
      <CardHeader className="space-y-4">
        <div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary underline cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Avatar & Title */}
        <div className="flex flex-col items-center">
          <Avatar className="h-20 w-20 mb-2">
            <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random`} alt={person.name} />
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
        </div>
      </CardHeader>

      <CardContent className="text-sm text-gray-700 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <p>
            <span className="font-medium">Height:</span> {person.height} cm
          </p>
          <p>
            <span className="font-medium">Hair:</span> {person.hair_color}
          </p>
          <p>
            <span className="font-medium">Eyes:</span> {person.eye_color}
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
