import React from 'react'
import { Link,useHistory } from 'react-router-dom';


const NavBar = () => {
    let history = useHistory();
    
    return (
        <div className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item" onClick={() => window.location.reload()}>
                        <Link to="/" style={{ textDecoration: 'none',color:'white' }}> City </Link>
                    </li>
                    <li className="nav-item" onClick={() => window.location.reload()}>
                        <Link to="/location" style={{ textDecoration: 'none',color:'white' }}> Location </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default NavBar;