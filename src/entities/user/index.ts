import { TToken } from "..";

export type TUser = {
  id?: string;
  email: string;
  fullname?: string;
  avatar_url?: string;
} & TToken;
