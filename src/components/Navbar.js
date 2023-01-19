import {  NavLink } from 'react-router-dom';
import Logo from '../assets/img/jobs_logo.png';

const Navbar = () => {
    return (
        <div className='container-fluid ' >


            <nav class="navbar navbar-expand-lg px-0 py-3">
                <div className="container-xl">
                    <NavLink className="navbar-brand" to="/Home" > <img src={Logo} className="h-8" alt="..." /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">

                        <div className="navbar-nav mx-lg-auto">
                            <NavLink className="nav-item nav-link" to="/Home" >     Inicio   </NavLink>
                            <NavLink className="nav-item nav-link" to="/Services">  Services </NavLink>
                            <NavLink className="nav-item nav-link" to="/WhyUs" >    WhyUs    </NavLink>
                            <NavLink className="nav-item nav-link" to="/About">     About    </NavLink>
                            <NavLink className="nav-item nav-link" to="/Careers">   Careers  </NavLink>
                        </div>
                        <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                        <NavLink className="btn btn-sm btn-outline-info login" exact to="/login">Login</NavLink>
                        </div>
                    </div>
                </div>
            </nav>


        </div>

    )
}
export default Navbar;