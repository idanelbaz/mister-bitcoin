import types from "../types";
import UserService from "../../services/UserService";

export const getUser = () => {
    return (dispatch) => {
        const response = UserService.getUser()
        return dispatch({ type: types.GET_USER, data: response })
    };
};

export const signUp = (username) => {
    return (dispatch) => {
        UserService.signUp(username);
        const response = UserService.getUser()
        return dispatch({ type: types.GET_USER, data: response })
    };
};
