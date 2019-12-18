import BaseService from "./BaseService";
import api from "../config/api.json";

class PostService extends BaseService {
  fetchComments({postId, pageNr}) {
    return this.apiGet({
      url: `/posts/${postId}/replies?page=${pageNr}&perPage=10`,
    });
  }

  createPost({post, attachment}) {
    const body = [
      {
        name: "locations",
        data: `${post.locations}`,
      },
      {
        name: "note",
        data: post.note,
      },
    ];

    return this.withAttachment({route: api.newPost, attachment, body});
  }

  async commentOnPost({comment, attachment}) {
    const body = [
      {
        name: "postId",
        data: `${comment.postId}`,
      },
      {
        name: "note",
        data: comment.note,
      },
    ];

    return this.withAttachment({route: api.postComment, attachment, body});
  }

  likePost(postId) {
    return this.apiPost({
      url: `/posts/like`,
      data: {postId},
    });
  }

  unLikePost(postId) {
    return this.apiPost({
      url: `/posts/unlike`,
      data: {postId},
    });
  }
}

export default new PostService();
