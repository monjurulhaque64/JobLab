import { Outlet } from 'react-router-dom';
import Navbar from '../Share/Navbar/Navbar';
import Footer from '../Share/Footer/Footer';

const Main = () => {
    return (
        <div className="container mx-auto mt-0">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;