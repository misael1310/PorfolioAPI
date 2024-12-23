"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPostById = exports.selectAllPosts = void 0;
exports.selectAllPosts = `
  SELECT idpost, post_title, post_content, bannerBackground, bannerPicture, bannerAlt, initial, sm, md, lg, xl
  FROM post
  INNER JOIN post_banner USING(idpost)
  WHERE post_status = 'Active'
`;
exports.selectPostById = `${exports.selectAllPosts} AND idpost = ?`;
//# sourceMappingURL=postQueries.js.map