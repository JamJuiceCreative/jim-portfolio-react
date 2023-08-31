import { Outlet } from 'react-router-dom';
import Header from '../Header';
import './index.scss';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <div className="content-container">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
