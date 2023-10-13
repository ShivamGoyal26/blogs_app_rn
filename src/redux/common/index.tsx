import {createSlice} from '@reduxjs/toolkit';
import {
  Post,
  deleteBlogPost,
  editBlogPost,
  getAllUserPosts,
} from '../../services/blogs';
import {showMessage} from 'react-native-flash-message';

// Files
import {goBack, popToTop} from '../../utils/routerServices';
import localization from '../../localization';

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

export const deletePostThunk = (postId: number) => {
  return async (dispatch: any, getState: any) => {
    await deleteBlogPost(postId);
    const posts: Post[] = getState().common.posts;
    const updatedPosts = posts.filter(post => post.id !== postId);
    dispatch(setPosts(updatedPosts));
    goBack();
  };
};

export const editPostThunk = (postData: Post) => {
  return async (dispatch: any, getState: any) => {
    const posts: Post[] = getState().common.posts;
    if (!postData.title) {
      return showMessage({
        message: localization.pleaseEnterTitle,
        type: 'danger',
      });
    }

    if (!postData.body) {
      return showMessage({
        message: localization.pleaseEnterDescription,
        type: 'danger',
      });
    }
    const res = await editBlogPost(postData.id, postData);
    if (res) {
      const updatedPosts = posts.map(post => {
        if (post.id === postData.id) {
          return res;
        }
        return post;
      });
      dispatch(setPosts(updatedPosts));
      popToTop();
    }
  };
};

export const {setLoading, setPosts, resetCommonSlice} = commonSlice.actions;

export default commonSlice.reducer;
