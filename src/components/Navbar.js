import React from 'react'
import M from 'materialize-css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav);

        loadNav();

        function loadNav() {
            document
            .querySelectorAll('.sidenav a')
                .forEach((elm) => {
                elm.addEventListener('click', () => {
                  var sidenav = document.querySelector('.sidenav');
                  M.Sidenav.getInstance(sidenav).close();
                })
            })
        }
    });

    return ( 
        <>
          <div className="navbar">
              <nav className="grey lighten-5" role="navigation">
                  <div className="nav-wrapper container">
                      <span className="brand-logo black-text" id="logo-container">
                        <i className="material-icons">cloud</i>
                      </span>
                      <a href="/#" className="sidenav-trigger black-text" data-target="nav-mobile">
                        <i className="material-icons">menu</i>
                      </a>

                      <ul className="topnav right hide-on-med-and-down">
                        <li>
                          <Link to="/" className="waves-effect">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to ="/blog" className="waves-effect">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/film" className="waves-effect">
                            Film
                          </Link>
                        </li>  
                        <li>
                          <Link to ="/contact" className="waves-effect">
                            Contact
                          </Link>
                        </li>   
                      </ul>

                      <ul className="sidenav" id="nav-mobile">
                        <li>
                          <div className="user-view">
                            <div className="background">
                              <img width="100%" src="dist/img/background-sidenav.jpg" alt="background-logo-personal"/>
                            </div>
                            <img className="circle" src="dist/img/circle-me.png" alt="logo-personal"/>
                            <span className="white-text name">Si ISAL</span>
                          </div>
                        </li>
                        <li>
                          <Link to="/" className="waves-effect">
                            <i className="large material-icons">home</i>
                              Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/about">
                            <i className="material-icons">person</i> 
                            About
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" className="waves-effect">
                            <i className="large material-icons">book</i>
                              Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/film" className="waves-effect">
                            <i className="large material-icons">tv</i>
                              Film
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" className="waves-effect">
                            <i className="large material-icons">contacts</i>
                              Contact
                          </Link>
                        </li>
                      </ul>
                  </div>
              </nav>
          </div>
        </>
    )
}

export default Navbar
