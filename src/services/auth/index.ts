import apiCall from '../../api';
import apiTypes from '../../api/apiTypes';
import endPoints from '../../api/endPoints';

export const getUser = async (userId: any) => {
  const res = await apiCall({
    enableLoader: true,
    type: apiTypes.get,
    url: `${endPoints.GET_USER}/${userId}`,
  });
  return res;
};
