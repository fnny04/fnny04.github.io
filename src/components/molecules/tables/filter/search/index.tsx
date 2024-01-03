import { FieldText } from "@/components";
import { FC, ReactElement } from "react";
import { TSearch } from "./type";
import { Icon } from "@iconify/react";

export const Search: FC<TSearch> = (props): ReactElement => {
  return (
    <FieldText
      type="search"
      preppend={<Icon icon="il:search" className="text-gray-400" width="1em" />}
      size="sm"
      placeholder={props.placeholder || "Search"}
      onChange={props.handleSearch}
    />
  );
};
