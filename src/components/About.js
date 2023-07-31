import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate= useNavigate();
  function clickhandler(){
    //move to support page
    navigate("/support")
  }
  return (
    <div>
    <div>About</div>
    <button onClick={clickhandler}>move to support page</button>
  </div>
  )
}

export default About;