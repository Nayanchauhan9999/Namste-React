import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError()
  
  return (
    <>
    <div>Hello I am an Error Page. how are you?</div>
    <h1> {error.status}  {error.statusText}</h1>
    </>
  )
}

export default ErrorPage