import { TCommonForms, TUploadImage } from "@/entities";

export type TUploadElement = TUploadImage & Pick<TCommonForms, "size" | "status">;
