import React from 'react'
import Hero from './Hero'
import Filter from './Filter'
import BlogsContainer from './BlogsContainer'
import Login from './Login'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import Register from './Register'

const Home = () => {
  const isLoginFormOpen = useSelector((store: RootState) => store.UiInteractions.isLoginFormOpen);
  const isRegisterFormOpen = useSelector((store: RootState) => store.UiInteractions.isRegisterFormOpen);

  return (
    <div className='container mx-auto'>
      <Hero />
      <Filter />
      <BlogsContainer />
      {isLoginFormOpen && <Login />}
      {isRegisterFormOpen && <Register />}
    </div>
  )
}

export default Home
