import { TMetaItem } from "@/entities";
import { ColumnDef } from "@tanstack/react-table";
import { ChangeEventHandler } from "react";

export type TDataTable<T extends Record<string, unknown>> = {
  data: T[];
  meta?: TMetaItem;
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  redirect?: () => void;
  handleSearch?: ChangeEventHandler<HTMLInputElement>;
};
