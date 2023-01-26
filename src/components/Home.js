import React from 'react'
import './Home.css';

export const Home = () => {
  return (
    <div className='title'>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <h1> Jop Opportunities</h1>
        <p class="text1">Great products are built block by block. MY WORLD PLACE  is redefining how products are built, applying a combination of technology and process improvements to deliver a new kind of distributed development experience.</p>
        <h3> We got three main products:</h3>
    
    <div className="card">
      <h5 className='title'>Senior Frontend Developer</h5>
      <p className='content'>We are looking for a highly capable Frontend Developer to work on web-based applications. You will be collaborating with international teams, designing components, and integrating data storage and protection solutions.</p> 
      <a href="Card link" className="card-link">Card link</a>
      <a href="botton-one" className="btn btn-secondary">Apply</a>
      <a href="botton-two" className="btn btn-secondary">Refer</a>
      </div>
    </div>

  )
    
}
export default Home;
