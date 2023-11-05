import { Outlet } from "react-router-dom";
import Footer from "./pages/shared/Footer/Footer";
import Navbar from "./pages/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
       <div className="max-w-[1140px] px-3 mx-auto">
       <Outlet></Outlet>
       </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
