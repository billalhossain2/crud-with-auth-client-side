import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { useContext } from 'react';
import { userContext } from '../../contexts/AuthContextProvider';
import { toast } from 'react-toastify';

//icons
import {AiOutlineMail} from "react-icons/ai"
import {LiaKeySolid} from "react-icons/lia"

function Login() {
  useTitle("JobFusion | Login")
  const navigate = useNavigate()
  const from = useLocation()?.state?.from || "/";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  //User Context
  const {user, logInUsingGoogle, loginWithEmailPassword} = useContext(userContext)

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = () => {
    // Google Sign-In logic here
    logInUsingGoogle()
    .then(result => {
      toast.success("Login success!", {autoClose:1000})
      navigate(from)
    })
    .catch(error=>{
      toast.error(error.message, {autoClose:1000})
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validation
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      // email/password authentication here
      console.log('Logging in with email and password');
      console.log(email, password)
      loginWithEmailPassword(email, password)
      .then(result =>{
        toast.success("Login success!", {autoClose:1000})
        navigate(from)
      })
      .catch(error=>{
        toast.error(error.message, {autoClose:1000})
      })
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className={`w-full outline-none p-2 border pl-10 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
              value={email}
              onChange={handleEmailChange}
            />
            <AiOutlineMail className='absolute bottom-2 left-2 text-2xl text-gray-400'></AiOutlineMail>
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className={`w-full outline-none p-2 pl-10 border ${passwordError ? 'border-red-500' : 'border-gray-300'}`}
                value={password}
                onChange={handlePasswordChange}
              />
              <LiaKeySolid className='absolute bottom-2 left-2 text-2xl text-gray-400'></LiaKeySolid>
              <span
                className="absolute right-3 top-2 text-gray-400 cursor-pointer"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Login
          </button>
          <p className='text-center mt-2'>Dont't have an account? <Link className='text-[#3b4edb] font-semibold hover:font-bold hover:underline' to="/register">Register</Link> </p>
        </form>
        <p className="text-center mt-4">Or</p>
        <button
          className="w-full bg-red-500 text-white py-2 px-4 rounded mt-2 hover:bg-red-600"
          onClick={handleGoogleSignIn}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
