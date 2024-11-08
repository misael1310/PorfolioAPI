import { RowDataPacket } from "mysql2/promise";

export interface Post extends RowDataPacket {
  idpost: number;
  post_title: string;
  post_content: string;
  post_date: Date;
  post_modified: Date;
  post_status: string;
}
