import {createSlice} from '@reduxjs/toolkit';

// Files
import {getUser} from '../../services/auth';
import {resetRoot} from '../../utils/routerServices';
import routes from '../../constants/routes';
import {generateUserID} from '../../utils/commonServices';
import {resetCommonSlice} from '../common';
import Spinner from '../../utils/SpinnerRef';
import users from '../../constants/users';

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
    Spinner.show();
    const userId = generateUserID();
    const res: any = await getUser(userId);
    console.log(users[userId]);
    if (res) {
      resetRoot(routes.DRAWER_STACK);
      dispatch(setUserData({...res, profileImage: users[userId]}));
      dispatch(setIsLoggedIn(true));
    }
    Spinner.hide();
  };
};

export const {resetAuthSlice, setIsLoggedIn, setUserData} = authSlice.actions;

export default authSlice.reducer;
