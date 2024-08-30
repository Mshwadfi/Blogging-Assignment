import axios from 'axios';
import Cookies from 'js-cookie';
import { NavigateFunction } from 'react-router-dom';
import { addUser } from '../redux/userSlice';
import { AnyAction, Dispatch } from 'redux';
import { toggleIsAuth, toggleUserMenu } from '../redux/UiInteractions';

export const loginUser = (email: string, password: string, navigate: NavigateFunction, dispatch : Dispatch<AnyAction>) => {
  
  axios
    .post('http://localhost:1337/api/auth/local', {
      identifier: email,
      password: password,
    })
    .then(response => {
      console.log('Well done!');
      console.log('User profile', response.data);
      console.log('User token', response.data.jwt);
      dispatch(toggleUserMenu);
      Cookies.set('token', response.data.jwt, { expires: 7 });
      dispatch(addUser(response.data.user));
      localStorage.setItem('user' , JSON.stringify(response.data.user));
      navigate('/blogs'); 
    })
    .catch(error => {
      console.log('An error occurred:', error.response);
    });
};



export const registerUser = (formData: FormData) => {
  axios.post('http://localhost:1337/api/auth/local/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data', 
    },
  })
  .then(response => {
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error
    if (axios.isAxiosError(error)) {
      console.error('An error occurred:', error.response || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  });
};

export const LogUserOut = () =>{

}

