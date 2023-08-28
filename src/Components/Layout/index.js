import { Outlet } from 'react-router-dom';
import Header from '../Header';
import './index.scss';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
