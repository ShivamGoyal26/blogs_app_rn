import {createSlice} from '@reduxjs/toolkit';

// Files
import {getUser} from '../../services/auth';
import {resetRoot} from '../../utils/routerServices';
import routes from '../../constants/routes';
import {generateUserID} from '../../utils/commonServices';
import {resetCommonSlice} from '../common';

const initialState = {
  isLoggedIn: false,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthSlice: () => initialState,
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const signOutThunk = () => {
  return (dispatch: any) => {
    dispatch(resetAuthSlice());
    dispatch(resetCommonSlice());
    resetRoot(routes.AUTH_STACK);
  };
};

export const getUserThunk = () => {
  return async (dispatch: any) => {
    const userId = generateUserID();
    const res: any = await getUser(userId);
    if (res) {
      resetRoot(routes.DRAWER_STACK);
      dispatch(setUserData(res));
      dispatch(setIsLoggedIn(true));
    }
  };
};

export const {resetAuthSlice, setIsLoggedIn, setUserData} = authSlice.actions;

export default authSlice.reducer;
