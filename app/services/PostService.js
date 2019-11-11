import BaseService from "./BaseService";

class PostService extends BaseService {
  createPost(data) {
    return this.apiPost({
      url: "/posts",
      data,
    });
  }
  
  replyToComment(data) {
    const postData = new FormData();
    Object.keys(data).forEach((field) => {
      if (field === 'attachment') {
        postData.append('attachment', data[field], data[field].name);
      } else {
        postData.append(field, data[field]);
      }
    });
    return this.apiPost({
      url: "/posts/reply",
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
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
