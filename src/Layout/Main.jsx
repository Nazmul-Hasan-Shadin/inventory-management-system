
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location= useLocation()
    const loginPage=location.pathname.includes('/login')
    const registerPage= location.pathname.includes('/register')

    return (
        <div>
      {  !loginPage && !registerPage &&  <Navbar></Navbar>}
                <Outlet></Outlet>
           {  !loginPage && !registerPage &&   <Footer></Footer>}
        </div>
    );
};

export default Main;