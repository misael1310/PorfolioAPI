import { Post } from "./PostModel";

export interface PostResponse
  extends Omit<Post, "post_date" | "post_modified" | "post_status"> {
  bannerSources: {
    initial: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
