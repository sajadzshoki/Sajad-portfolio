import React from 'react'
import mypic from "../images/mypic.png"
const Home = () => {
  return (
    <div className='home'>
      <div className='home-texts'>
        <h1>
          Hello I'm
          <br/><span> Sajad</span><br/>
          a Front-End Developer
        </h1>
        <p>Im very Happy You are here <i class='bx bx-happy-heart-eyes bx-flashing' ></i></p>
        <div className='btn-group'>

        <button className='btn know-more-btn'>Know More About Me</button>
        <button className='btn contact-me-btn'>Contact Me</button>
        </div>
      </div>
      
      <div className="home-image">
        <img alt="sajad_image"src={mypic} className="my-pic"/>
      </div>
      
    </div>
  )
}

export default Home