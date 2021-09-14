import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="row">
                    <div className="col m6 s12 center-align">
                        <img className="responsive-img" width="250px" src="/dist/img/circle-me.png" alt="me-siisal"/>
                    </div>
                    <div className="col m6 s12">
                        <blockquote style={{ borderColor: '#53bd84' }}>
                            Selamat datang di blog — ya, sudah jelas, kan — Blog ini berisi <b>informasi</b> tentang gue, <b>tulisan-tulisannya</b> tentang apapun, intinya ini adalah <b>cloud nostalgia</b> bagi gue, sadappp.
                        </blockquote>
                        <Link to ="/blog" className="btn-floating btn-large waves-effect waves-light maincolor">
                            <i className="material-icons">send</i>
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
