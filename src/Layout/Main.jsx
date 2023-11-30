
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location= useLocation()
    const loginPage=location.pathname.includes('/login')
    const registerPage= location.pathname.includes('/register')
  const specialError= location.pathname.includes('/unauthorized')
    return (
        <div>
      {  !loginPage && !registerPage &&  !specialError &&  <Navbar></Navbar>}
                <Outlet></Outlet>
           {  !loginPage && !registerPage && !specialError &&   <Footer></Footer>}
        </div>
    );
};

export default Main;