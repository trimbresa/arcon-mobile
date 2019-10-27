import BaseService from "./BaseService";

class PostService extends BaseService {
  createPost(data) {
    return this.apiPost({
      url: "/posts",
      data,
    });
  }
  replyToComment(data) {
    return this.apiPost({
      url: `/posts/reply`,
      data,
    });
  }
  likeComment(postId) {
    return this.apiPost({
      url: `/posts/like`,
      data: {postId},
    });
  }
  unLikeComment(postId) {
    return this.apiPost({
      url: `/posts/unlike`,
      data: {postId},
    });
  }

  fetchPosts() {
    return this.apiGet({
      url: "/posts",
    });
  }
}

export default new PostService();
