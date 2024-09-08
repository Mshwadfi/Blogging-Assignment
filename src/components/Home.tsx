import React from 'react'
import Hero from './Hero'
import BlogsContainer from './BlogsContainer'


const Home = () => {
  // const isUpdateBlogFormOpen = useSelector((store: RootState) => store.UiInteractions.isUpdateBlogFormOpen);
  // const isRegisterFormOpen = useSelector((store: RootState) => store.UiInteractions.isRegisterFormOpen);

  return (
    <div className='container mx-auto'>
      <Hero />
      {/* <Filter /> */}
      <BlogsContainer />
      {/* {isUpdateBlogFormOpen && <UpdateBlog />} */}
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  )
}

export default Home
