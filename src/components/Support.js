import React from 'react'
import { useNavigate } from 'react-router-dom'
const Support = () => {
  const navigate= useNavigate();
  function clickhandler(){
    navigate("/");
  }
  return (
    <div>

    <div>labs</div>
    <button onClick={clickhandler}>move to home page</button>

  </div>
  )
}

export default Support