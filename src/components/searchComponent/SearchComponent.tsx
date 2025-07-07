import { useCallback, useEffect, useState } from "react";
import * as _ from "underscore";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Input } from "../ui/input";
import { setSearchResult } from "@/store/feature/peopleSlice";
import type { IPersonInfo } from "@/constants/peopleInterface";

const SearchComponent = () => {
  const [searchString, setSearchString] = useState<string>("");
  const { searchList } = useAppSelector((state) => state.people);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchString === "") {
      dispatch(setSearchResult([]));
    } else {
      let searchedResult: IPersonInfo[] = searchList.filter((record: IPersonInfo) => {
        if (record.name.toLowerCase().includes(searchString)) {
          return record;
        }
      });
      dispatch(setSearchResult(searchedResult));
    }
  }, [searchString]);

  const handleOnChange = (eve: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(eve?.target?.value.toLowerCase());
  };

  const debouncedSearch = useCallback(
    _.debounce((value: React.ChangeEvent<HTMLInputElement>) => handleOnChange(value), 500),
    []
  );

  return (
    <>
      <Input placeholder="Search by name ..." className="w-1/2 mb-2" onChange={debouncedSearch} />
    </>
  );
};

export default SearchComponent;
