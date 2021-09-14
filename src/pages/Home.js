import React from 'react';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="row">
                    <div className="col m6 s12 center-align">
                        <img className="responsive-img" width="250px" src="/dist/img/circleMe.png" alt="Personal"/>
                    </div>
                    <div className="col m6 s12">
                        <blockquote>
                            Selamat datang di blog — ya, sudah jelas, kan — Blog ini berisi <b>informasi</b> tentang gue, <b>tulisan-tulisannya</b> tentang apapun, intinya ini adalah <b>cloud nostalgia</b> bagi gue.
                        </blockquote>
                        <a href="/blog" className="btn-floating btn-large waves-effect waves-light red tooltipped" data-position="right" data-tooltip="Lanjutkan..."><i className="material-icons">send</i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
