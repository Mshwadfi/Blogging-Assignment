import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store'; 
import Cookies from 'js-cookie';
import Header from '../components/Header';


const  initialState = {
    user: {
        isAuth: false, 
      },
}
const mockStore = configureStore([]);
const store = mockStore(initialState);

jest.mock('js-cookie', () => ({
  get: jest.fn(),
  remove: jest.fn(),
}));

describe('Header component', () => {
  beforeEach(() => {
    Cookies.get.mockClear();
    Cookies.remove.mockClear();
  });

  test('renders correctly when user is not authenticated', () => {
    Cookies.get.mockReturnValue(null);

    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Blogging')).toBeInTheDocument();
    const loginButtons = screen.getAllByText('Log in');
    expect(loginButtons.length).toEqual(2);
    const signUpButtons = screen.getAllByText('Sign Up');
    expect(signUpButtons.length).toEqual(2);
    expect(screen.queryByText('Log Out')).not.toBeInTheDocument();
    expect(screen.queryByText('Create')).not.toBeInTheDocument();
  });

  test('renders correctly when user is authenticated', () => {
    Cookies.get.mockReturnValue('fakeToken');

    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Blogging')).toBeInTheDocument();
    const createButtons = screen.getAllByText('Create');
    expect(createButtons.length).toEqual(2);
    const logOutButtons = screen.getAllByText('Log Out');
    expect(logOutButtons.length).toEqual(2);
    expect(screen.queryByText('Log in')).not.toBeInTheDocument();
    expect(screen.queryByText('Sign Up')).not.toBeInTheDocument();
  });

  test('handles menu toggle', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    const menuButton = screen.getByRole('button',{name: 'toggle'});
    fireEvent.click(menuButton);

    // expect(screen.getByRole('button', { name: 'hamburger' })).toBeInTheDocument();
    const homeElements = screen.getAllByText('Home');
    expect(homeElements.length).toBeGreaterThan(1);
    const blogsElements = screen.getAllByText('Home');
    expect(blogsElements.length).toBeGreaterThan(1);
    // expect(screen.getByText('Blogs')).toBeInTheDocument();
  });

  test('handles log out correctly', () => {
    Cookies.get.mockReturnValue('fakeToken');
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    const logoutLink = screen.getByLabelText('logOut');
    fireEvent.click(logoutLink);

    expect(Cookies.remove).toHaveBeenCalledWith('token');
    expect(store.getActions()).toContainEqual({ type: 'user/removeUser' });
  });

  test('renders responsive menu correctly', () => {
    Cookies.get.mockReturnValue(null);
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    const menuButton = screen.getByRole('button', { name: 'hamburger' });
    fireEvent.click(menuButton);

    expect(screen.getAllByText('Home').length).toBeGreaterThan(1);
expect(screen.getAllByText('Blogs').length).toBeGreaterThan(1);

  });
});
