import axios from 'axios';
import Cookies from 'js-cookie';
import { NavigateFunction } from 'react-router-dom';
import { addUser } from '../redux/userSlice';
import { AnyAction, Dispatch } from 'redux';

export const loginUser = (email: string, password: string, navigate: NavigateFunction, dispatch : Dispatch<AnyAction>) => {
  // const dispatch = useDispatch()
  axios
    .post('http://localhost:1337/api/auth/local', {
      identifier: email,
      password: password,
    })
    .then(response => {
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);

      Cookies.set('token', response.data.jwt, { expires: 7 });
      dispatch(addUser(response.data.user));
      navigate('/blogs'); 
    })
    .catch(error => {
      console.log('An error occurred:', error.response);
    });
};
