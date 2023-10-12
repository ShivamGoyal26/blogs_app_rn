import {createSlice} from '@reduxjs/toolkit';
import {getAllUserPosts} from '../../services/blogs';

const initialState = {
  loading: false,
  posts: [],
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setPosts(state, action) {
      state.posts = action.payload;
    },
    resetCommonSlice: () => initialState,
  },
});

export const getUserPostsThunk = (userId: number) => {
  return async (dispatch: any) => {
    const res: any = await getAllUserPosts(userId);
    if (res) {
      if (res?.length) {
        dispatch(setPosts(res));
      }
    }
  };
};

export const {setLoading, setPosts, resetCommonSlice} = commonSlice.actions;

export default commonSlice.reducer;
