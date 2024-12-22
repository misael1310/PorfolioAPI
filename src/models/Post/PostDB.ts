import { RowDataPacket } from "mysql2/promise";
import { Post } from "./PostModel";

export interface PostDB
  extends RowDataPacket,
    Omit<Post, "post_date" | "post_modified" | "post_status"> {
  initial: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
