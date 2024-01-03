import { TInput } from "@/entities";

export type TInputRadio = Omit<TInput, "type" | "size">;
