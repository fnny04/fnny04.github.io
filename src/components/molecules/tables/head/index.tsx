import { ReactElement } from "react";
import { TTableHead } from "./type";
import { Icon } from "@iconify/react";
import { flexRender } from "@tanstack/react-table";

export const TableHead = <T extends Record<string, unknown>>(
  props: TTableHead<T>,
): ReactElement => {
  return (
    <thead className="bg-gray-100 p-2 w-auto h-auto rounded-lg">
      {props.tableHead.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th className="text-gray-500 p-2 text-left" key={header.id}>
              <div
                {...{
                  className: "flex items-center",
                  onClick: header.column.getToggleSortingHandler(),
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}

                {{
                  asc: <Icon icon="bxs:up-arrow" width="1.5em" style={{ marginLeft: "2px" }} />,
                  desc: <Icon icon="bxs:down-arrow" width="1.5em" style={{ marginLeft: "2px" }} />,
                }[header.column.getIsSorted() as string] ?? null}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
