import React from 'react'


export const Home = () => {
  return (
  <div>
    <div className='title'>
      <h1 className=" text-center fs-7 fw-bold" > Jop Opportunities</h1>
      <p className="text-center p-1 fs-5 ">Great products are built block by block. MY WORLD PLACE  is redefining how products are built, applying a combination of technology and process improvements to deliver a new kind of distributed development experience.</p>
      <h5 className="text-center  mb-0 p-1 fs-4"> :We got three main products</h5>
    </div>
    <h2>
        <nav className="text-center mb-0 p-3 fs-5">
            <a href="#" className="btn btn-danger">Dedicated Product Team </a>
            <a href="#" className="btn btn-danger">Product Quality Automation</a>
            <a href="#" className="btn btn-danger">Product co-creation & blockchain </a>
        </nav>
    </h2>
    <div class="card shadow">
  <h5>Senior Frontend Developer</h5>
    <p class="text-card">We are looking for a highly capable Frontend Developer to work on web-based applications. You will be collaborating with international teams, designing components, and integrating data storage and protection solutions.</p> 
      <a href="Card link" class="link" >Card link</a>
      <button><a href="botton-one" >Apply</a></button>
      <button><a href="botton-two" >Refer</a></button>
</div>
<div class="card shadow">
  <h5>Senior Frontend Developer</h5>
    <p class="text-card">We are looking for a highly capable Frontend Developer to work on web-based applications. You will be collaborating with international teams, designing components, and integrating data storage and protection solutions.</p> 
      <a href="Card link" class="link" >Card link</a>
      <p>
        <button><a href="botton-one" >Apply</a></button>
        <button><a href="botton-two" >Refer</a></button>
      </p>
</div>
    </div>
  )
    
}
export default Home;
