import {socket} from "../socket";

export const login = () => {
  return async (dispatch, getState) => {
    try {
      setTimeout(() => {
        dispatch({type: 'auth/login', payload: {user: {name: 'fake', avatar: 'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'}}});
      }, 1000);
    } catch (err) {
      return;
    }
  }
}