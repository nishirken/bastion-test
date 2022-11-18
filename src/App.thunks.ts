import { AppThunk } from "./app/store";
import {getUser} from './api';
import { appActionCreators } from "./App.actions";

export const fetchUser = (): AppThunk => async (dispatch) => {
    try {
      const response = await getUser();

      dispatch(appActionCreators.fetchUserSuccess(response));
    } catch (e) {
      dispatch(appActionCreators.fetchUserError());
      dispatch(appActionCreators.showError('/user request'));
    }
  };