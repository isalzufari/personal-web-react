import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="page-footer grey lighten-5">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <h5>Navigate</h5>
                            <ul>
                                <Link to="/">
                                    <li>
                                        <i className="material-icons">home</i> 
                                        Home
                                    </li>
                                </Link>

                                <Link to ="/blog">
                                    <li>
                                        <i className="material-icons">book</i> 
                                        Blog
                                    </li>
                                </Link>

                                <Link to="/film">
                                    <li>
                                        <i className="material-icons">tv</i>
                                        Film
                                    </li>
                                </Link>
                                
                                <Link to="/contact">
                                    <li>
                                        <i className="material-icons">contacts</i> 
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="col m4 s12">
                            <h5>Social</h5>
                            <div className="row">
                                <div className="col">
                                    <a href="//instagram.com/isalzufari" target="_blank" rel="noreferrer">
                                        <img width="40px" src="dist/svg/instagram.svg" alt="instagram"/>
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="//twitter.com/isalzufari" target="_blank" rel="noreferrer">
                                        <img width="40px" src="dist/svg/twitter.svg" alt="twitter"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright grey lighten-4">
                    <div className="container black-text">
                        Copyright © 2020 Si ISAL
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
