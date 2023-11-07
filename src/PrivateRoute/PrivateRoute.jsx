import React from 'react'
import { useContext } from 'react'
import { userContext } from '../contexts/AuthContextProvider'
import Spinner from '../components/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user, isLoading} = useContext(userContext);
  const location = useLocation().pathname;
  if(isLoading){
    return <Spinner></Spinner>
  }

  if(!user){
    return <Navigate to="/login" state={{from:location}}></Navigate>
  }

  return children;
}

export default PrivateRoute