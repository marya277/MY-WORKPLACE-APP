import React from 'react'


export const Home = () => {
  return (
  <div>
    <div className='title'>
      <h1 className=" text-center fs-7 fw-bold" > Jop Opportunities</h1>
      <p className="text-center p-1 fs-5 ">Great products are built block by block. MY WORLD PLACE  is redefining how products are built, applying a combination of technology and process improvements to deliver a new kind of distributed development experience.</p>
      <h5 className="text-center  mb-0 p-1 fs-4"> :We got three main products</h5>
    </div>
        <nav className="text-center mb-0 p-3 fs-5">
            <a href="#" className="btn btn-danger">Dedicated Product Team </a>
            <a href="#" className="btn btn-danger">Product Quality Automation</a>
            <a href="#" className="btn btn-danger">Product co-creation & blockchain </a>
        </nav>
    <div className="row" style="max-width: 85rem;">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
</div>
  )
    
}
export default Home;
