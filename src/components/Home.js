import React from 'react'
import './Home.css';


export const Home = () => {
  return (
  <div>
    <div className='title'>
      <h1 className=" text-center fs-7 fw-bold" > Jop Opportunities</h1>
      <p className="text-center p-1 fs-5 ">Great products are built block by block. MY WORLD PLACE  is redefining how products are built, applying a combination of technology and process improvements to deliver a new kind of distributed development experience.</p>
      <h5 className="text-center  mb-0 p-1 fs-4"> We got three main products:</h5>
    </div>
    <h2>
        <nav className="text-center cols-1 md-3 p-3 fs-5 g-4">
        <a href="#" className="link">1. Product co-creation & blockchain </a>
        <a href="#" className="link">2. Product Quality Automation</a>
        <a href="#" className="link">3. Dedicated Product Team </a>
        </nav>
    </h2>

  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Senior Frontend Developer</h5>
          <p className="card-text">We are looking for a highly capable Frontend Developer to work on web-based applications. You will be collaborating with international teams, designing components, and integrating data storage and protection solutions.</p>
            <p><a href="Card link" className="link text-end" >view more</a></p>
            <button type="button" class="btn btn-light">Apply</button>
            <button type="button" class="btn btn-light">Refer</button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Senior Frontend Developer</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Senior Frontend Developer</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Senior Frontend Developer</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Senior Frontend Developer</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
    
}
export default Home;
