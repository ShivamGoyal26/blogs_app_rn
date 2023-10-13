import api from '../../api';
import apiTypes from '../../api/apiTypes';
import endPoints from '../../api/endPoints';

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const getAllUserPosts = async (userId: number) => {
  const res = await api({
    enableLoader: true,
    type: apiTypes.get,
    url: `${endPoints.GET_USER}/${userId}/posts`,
  });
  return res;
};

export const editBlogPost = async (postId: number, data: Post) => {
  const res = await api({
    type: apiTypes.put,
    url: `${endPoints.GET_POSTS}/${postId}`,
    data: data,
  });
  return res;
};

export const deleteBlogPost = async (postId: number) => {
  const res = await api({
    type: apiTypes.delete,
    url: `${endPoints.GET_POSTS}/${postId}`,
  });
  return res;
};
