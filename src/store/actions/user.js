import { userActions } from "../reducers/userReducers";

const logout = () => (dispatch) => {
  dispatch(userActions.resetUserInfo());
  localStorage.removeItem("account");
};

export { logout };
