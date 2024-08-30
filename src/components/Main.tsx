import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import UpdateBlog from './UpdateBlog';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const Main = () => {
  const isUpdateBlogFormOpen = useSelector((store: RootState) => store.UiInteractions.isUpdateBlogFormOpen);

  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <Outlet />
        {isUpdateBlogFormOpen && <UpdateBlog />}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
