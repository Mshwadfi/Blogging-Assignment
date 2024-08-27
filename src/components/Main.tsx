import { Outlet } from 'react-router-dom';
import Header from './Header';

const Main = () => {
  return (
    <div className="App h-full">
      <Header />
      <Outlet /> 
    </div>
  );
};

export default Main;
