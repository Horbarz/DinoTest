import React from 'react'
import { Link,useHistory } from 'react-router-dom';


const NavBar = () => {
    let history = useHistory();
    
    return (
        <div className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item" onClick={() => window.location.reload(false)} >
                        <Link to="/" style={{ textDecoration: 'none',color:'white' }}> Cities </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/location" style={{ textDecoration: 'none',color:'white' }}> Hotels </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default NavBar;