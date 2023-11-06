import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { userContext } from '../../contexts/AuthContextProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';

function Register() {
  useTitle("JobFusion | Register")
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [photoUrlError, setPhotoUrlError] = useState('');

  // User Context 
    const {user, signupUserWithEamilAndPWD, updateUserProfile, logoutUser} = useContext(userContext)
    const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validation
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setPhotoUrlError('');

    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      isValid = false;
    }else if (!(/[a-z]/).test(password)) {
      setPasswordError('Password should contain at least one lower case letter');
      isValid = false;
    }else if (!(/[A-Z]/).test(password)) {
      setPasswordError('Password should contain at least one upper case letter');
      isValid = false;
    }else if (!(/[0-9]/).test(password)) {
      setPasswordError('Password should contain at least one numeric value');
      isValid = false;
    }else if (!(/[*@#$-.]/).test(password)) {
      setPasswordError('Password should contain at least one special character (* @ # $ -.)');
      isValid = false;
    }

    if (!photoUrl) {
      setPhotoUrlError('Photo URL is required');
      isValid = false;
    } else if (!isValidPhotoUrl(photoUrl)) {
      setPhotoUrlError('Invalid Photo URL');
      isValid = false;
    }

    if (isValid) {
      // You can now submit the registration data
      console.log('Registration data:', { name, email, password, photoUrl });
      signupUserWithEamilAndPWD(email, password)
      .then(user=>{
        //Update user after registration success
        updateUserProfile({displayName:name, photoURL:photoUrl})
        .then(()=>{
          //Logout user
          logoutUser()
          .then(()=>toast.success("Registration success!", {autoClose:1000}))
          .catch(()=>toast.error(error.message, {autoClose:1000}))
          navigate("/login")
        })
        .catch(error=>toast.error(message.error, {autoClose:1000}))
      })
      .catch(error=>{
        toast.error(error.message, {autoClose:1000})
      })
    }
  };

  const isValidPhotoUrl = (url) => {
    // Implement a validation logic for photo URL (e.g., check if it's a valid URL)
    // You can use a regular expression or a more complex URL validation library
    return true;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              className={`w-full p-2 border ${nameError ? 'border-red-500' : 'border-gray-300'}`}
              value={name}
              onChange={handleNameChange}
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className={`w-full p-2 border ${emailError ? 'border-red-500' : 'border-gray-300'}`}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className={`w-full p-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'}`}
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="photoUrl" className="block text-gray-600">Photo URL</label>
            <input
              type="text"
              id="photoUrl"
              className={`w-full p-2 border ${photoUrlError ? 'border-red-500' : 'border-gray-300'}`}
              value={photoUrl}
              onChange={handlePhotoUrlChange}
            />
            {photoUrlError && <p className="text-red-500 text-sm">{photoUrlError}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Register
          </button>
          <p className='text-center mt-2'>Already have an account? <Link className='text-[#3b4edb] font-semibold hover:font-bold hover:underline' to="/login">Login</Link> </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
