import { Outlet } from "react-router-dom";
import Footer from "./pages/shared/Footer/Footer";
import Navbar from "./pages/shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { themeContext } from "./contexts/ThemeContextProvider";
const Root = () => {
  const {isDark} = useContext(themeContext)
  return (
    <div className={`${isDark ? 'bg-black dark-mode' : ''}`}>
      <Navbar></Navbar>
       <div className="max-w-[1140px] px-3 mx-auto">
       <Outlet></Outlet>
       </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
