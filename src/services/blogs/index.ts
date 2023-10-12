import apiCall from '../../api';
import apiTypes from '../../api/apiTypes';
import endPoints from '../../api/endPoints';

export const getAllUserPosts = async (userId: any) => {
  const res = await apiCall({
    enableLoader: true,
    type: apiTypes.get,
    url: `${endPoints.GET_USER}/${userId}/posts`,
  });
  return res;
};

export const getPostDetail = async (postId: any) => {
  const res = await apiCall({
    enableLoader: true,
    type: apiTypes.get,
    url: `${endPoints.GET_USER}/app/posts/${postId}`,
  });
  return res;
};
