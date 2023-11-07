import React from 'react'
import { useContext } from 'react'
import { userContext } from '../contexts/AuthContextProvider'
import Spinner from '../components/Spinner';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user, isLoading} = useContext(userContext);
  if(isLoading){
    return <Spinner></Spinner>
  }

  if(!user){
    return <Navigate to="/login" replace></Navigate>
  }

  return children;
}

export default PrivateRoute