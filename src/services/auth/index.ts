import api from '../../api';
import apiTypes from '../../api/apiTypes';
import endPoints from '../../api/endPoints';

export const getUser = async (userId: any) => {
  const res = await api({
    type: apiTypes.get,
    url: `${endPoints.GET_USER}/${userId}`,
  });
  return res;
};
