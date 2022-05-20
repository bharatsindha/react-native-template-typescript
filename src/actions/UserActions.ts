import {UserController} from '@/controllers';
import {strings} from '@/localization';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginSuccess = (user: any) => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: {user},
});

const loginError = (error: any) => ({
  type: TYPES.LOGIN_ERROR,
  payload: {error},
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});

export const login =
  (username: any, password: any): any =>
  async (dispatch: any, _: any, {demoMode, networkService}: any) => {
    try {
      dispatch(loginRequest());
      const userController = new UserController(networkService);
      const {data} = await userController.login({username, password, demoMode});
      if (!demoMode) {
        networkService.setAccessToken(data.user.accessToken);
      }
      dispatch(loginSuccess(data.user));
    } catch ({data}) {
      //   dispatch(loginError(data?.error ?? strings.login.invalidCredentials));
      dispatch(loginError(strings.login.invalidCredentials));
    }
  };

export const logout =
  (): any =>
  async (dispatch: any, _: any, {demoMode, networkService}: any) => {
    try {
      const userController = new UserController(networkService);
      await userController.logout({demoMode});
    } finally {
      networkService.clearAccessToken();
      dispatch(clearStore());
    }
  };
