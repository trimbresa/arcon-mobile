import BaseService from "./BaseService";
import api from "../config/api.json";
import RNFetchBlob from "rn-fetch-blob";
import StorageManager from "../helpers/StorageManager";

const withAttachment = async ({route, attachment, body: initialBody}) => {
  const token = await StorageManager.get("token");

  const body = [...initialBody];

  if (attachment)
    if (attachment.type === "url")
      body.push({
        name: "attachmentUrl",
        data: attachment.url,
      });
    else
      body.push({
        name: "attachment",
        filename: attachment.filename,
        type: attachment.type,
        data: RNFetchBlob.wrap(attachment.path || attachment.uri),
      });

  return RNFetchBlob.fetch(
    "POST",
    api.baseURL + route,
    {
      Authorization: "Bearer " + token,
      "Content-Type":
        !attachment || attachment.type === "url"
          ? "application/json"
          : "multipart/form-data",
    },
    body,
  )
    .then(resp => {
      return resp.data;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

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

    return withAttachment({route: api.newPost, attachment, body});
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

    return withAttachment({route: api.postComment, attachment, body});
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
