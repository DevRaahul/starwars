import { Input } from "../ui/input";

const SearchComponent = () => {
  const handleOnChange = (eve: React.ChangeEvent<HTMLInputElement>) => {
    console.log(eve.target.value);
  };

  return (
    <>
      <Input placeholder="Search by name ..." className="w-1/2 mb-2" onChange={handleOnChange} />
    </>
  );
};

export default SearchComponent;
