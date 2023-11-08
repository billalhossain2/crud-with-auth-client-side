import "./Footer.css";
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa"
import {BiLogoGoogle} from "react-icons/bi"
const Footer = () => {
  return (
    <div className="bg-[#303030] text-white">
      {/* header  */}
      <header className="flex md:pb-0 py-10 md:flex-row gap-8 flex-col md:items-center border-b-[1px] border-solid border-gray-600 px-5">
        <div className="flex items-center md:gap-3 gap-1 md:p-5 p-2 flex-1">
          <img
            src="https://i.ibb.co/JvYPn2V/fusion-logo.png"
            alt="Job Fusion Logo"
          />
          <h3 className="font-bold text-3xl">JobFusion</h3>
        </div>
        <div className="flex md:flex-row flex-col md:items-center gap-10 relative">
          <div className="flex gap-3 text-2xl text-gray-500">
            <FaFacebookF className="social-links"></FaFacebookF>
            <FaTwitter className="social-links"></FaTwitter>
            <BiLogoGoogle className="social-links"></BiLogoGoogle>
            <FaLinkedinIn className="social-links"></FaLinkedinIn>
          </div>
          <select className="select text-gray-300 bg-gray-600 hover:bg-[#2A41E8] hover:text-white max-w-xs">
            <option selected>English</option>
            <option>Japanese</option>
            <option>Italian</option>
            <option>Bengali</option>
            <option>Hindi</option>
            <option>Chaineese</option>
            <option>Turki</option>
          </select>
        </div>
      </header>
      <footer className="footer md:p-10 p-5">
        <nav className="text-gray-300 text-[17px]">
          <header className="text-gray-200 text-2xl mb-1">For Candidates</header>
          <a className="link link-hover">Browse Jobs</a>
          <a className="link link-hover">Add Resume</a>
          <a className="link link-hover">Job Alerts</a>
          <a className="link link-hover">My Bookmarks</a>
        </nav>
        <nav className="text-gray-300 text-[17px]">
          <header className="text-gray-200 text-2xl mb-1">For Employers</header>
          <a className="link link-hover">Browse Candidates</a>
          <a className="link link-hover">Post a Job</a>
          <a className="link link-hover">Post a Task</a>
          <a className="link link-hover">Plans and Pricing</a>
        </nav>
        <nav className="text-gray-300 text-[17px]">
          <header className="text-gray-200 text-2xl mb-1">Helpful Links</header>
          <p><span className="font-bold">Email</span>: <span className="hover:underline">billal.webdev@gmail.com</span></p>
          <p><span className="font-bold">Phone</span>: <span className="hover:underline">+8801780128076</span></p>
          <p><span className="font-bold">Address</span>: <span className="hover:underline">Tomchom Bridge, Comilla</span></p>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="text-gray-300 text-[17px]">
          <header className="text-gray-200 text-2xl mb-1">Account</header>
          <a className="link link-hover">Log In</a>
          <a className="link link-hover">My Account</a>
        </nav>
        <form>
          <header className="text-gray-200 text-2xl mb-1">Sign Up For a Newsletter</header>
          <fieldset className="form-control lg:80 w-60">
            <label className="label">
              <span className="label-text text-gray-300 text-[17px] mb-3">Weekly breaking news, analysis and cutting edge advices on job searching.</span>
            </label>
            <div className="relative flex lg:flex-row flex-col">
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered text-gray-600 w-full lg:pr-16"
              />
              <button className="btn bg-[#2A41E8] hover:bg-[#2A41E8] text-white absolute top-0 right-0 rounded-l-none border-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="text-center text-gray-300 border-t-[1px] border-solid border-gray-600 py-10">
        <p>© {new Date().getFullYear()} <span className="text-gray-100 font-bold">JobFusion.</span> All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
