import { FC, ReactElement } from "react";
import { TTable } from "./type";
import { Search, Pagination, Button } from "@/components";

export const Table: FC<TTable> = (props): ReactElement => {
  const { redirect, ...rest } = props;
  return (
    <section className="shadow-md bg-white h-full border p-4 rounded-lg w-full gap-y-4 flex flex-col overflow-x-auto">
      <div className="flex gap-x-3 items-center justify-between flex-row-reverse  sticky z-10 w-full">
        <div>
          <Search {...rest} />
        </div>
        <div>
          <Button onClick={redirect} variant="primary" size="sm">
            + Add Data
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto min-w-max w-full h-fit flex p-1 bg-gray-50 rounded-lg relative">
        <table {...rest} className="p-2 w-full">
          {rest.children}
        </table>
      </div>
      <Pagination {...rest} />
    </section>
  );
};
