export interface Post {
  idpost: number;
  post_title: string;
  post_content: string;
  post_date: Date;
  post_modified: Date;
  post_status: "Active" | "Inactive";
  bannerBackground: string;
  bannerPicture: string;
  bannerAlt: string;
}
