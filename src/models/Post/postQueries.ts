export const selectAllPosts = `
  SELECT idpost, post_title, post_content, bannerBackground, bannerPicture, bannerAlt, initial, sm, md, lg, xl
  FROM post
  INNER JOIN post_banner USING(idpost)
  WHERE post_status = 'Active'
`;

export const selectPostById = `${selectAllPosts} AND idpost = ?`;
