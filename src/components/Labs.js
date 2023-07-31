import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
  const navigate= useNavigate();
  function clickhandler(){
    navigate("/About");
  }
  return (

    <div>

      <div>labs</div>
      <button onClick={clickhandler}>move to about page</button>

    </div>
  )
}

export default Labs