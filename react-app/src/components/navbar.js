import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
    // using these props to access the properties on the router dom wouldnt normally work becase we arent using 'BrowserRouter'
    // but we have used a higherOrder compontent (withRouter) to get access to it
    console.log(props);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke 'Times</a>
                <ul className="right">
                    {/*reloads browser*/}
                    <li><a href="/home">Home</a></li>
                    {/* React loads it */}
                    <li><Link to="/about">About</Link></li>
                    {/* Also adds a class of 'active' to the active link, allowing for customisation */}
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)