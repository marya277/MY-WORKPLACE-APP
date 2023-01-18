import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
     <div className='container-fluid ' >
<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-row ">
    
                <div className="navbar h-auto ">
                    
              
                    <div className=" container navbar-nav mx-lg-auto">
                    <div className='mx-5'>
                    <a class="navbar-brand" href="#">LOGO </a>
                    </div>
                    <div className='navbar mx-5'>
                    <NavLink
                            className= "nav-link"
                            to="/Home"
                        >
                            Inicio 
                        </NavLink>
  
                        <NavLink 
                            className="nav-link dropdown-toggle"
                            to="/Services"
                        >
                            Services
                    
                        </NavLink>
                        <NavLink 
                            className="nav-link"  to="/WhyUs"
                        >
                            WhyUs
                        </NavLink>
                        <NavLink 
                            className="nav-link"
                            to="/About"
                        >
                            About
                        </NavLink>
                        <NavLink 
                            className="nav-link"
                            to="/Careers"
                        >
                            Careers
                        </NavLink>
                    </div>
                       
                    </div>
                </div>
                <div className=" mx-5">
                <button type="button" className="btn btn-outline-secondary btn   justify-content-end">Login</button>
                </div>
        
            </nav>
        
        </div>

    )
}
export default Navbar;