import React, { useEffect, useState } from 'react'
import M from 'materialize-css';
import env from 'react-dotenv';
import Films from '../components/Films';

const Film = () => {
    const tab = document.querySelectorAll('.tabs');
    M.Tabs.init(tab, {
        swipeable :false
    });

    const [labels, setLabels] = useState('tv');
    const [filmItems, setFilmItems] = useState();

    useEffect(() => {
        const mdb_url = `https://api.themoviedb.org/3/account/{account_id}/rated/`;
        const mdb_key = `?api_key=${env.KEY_MDB_URL}&language=en-US&session_id=6033481a172d67a6d148caf06b57babd43213ffc&sort_by=created_at.asc&page=1`;
        
        setFilmItems();
        fetch(`${mdb_url}${labels}${mdb_key}`)
        .then(res => res.json())
        .then(
          (res) => {
            console.log(res)
            setFilmItems(res.results)
          },    
          (error) => {
            console.log(error)
          }
        )

    }, [labels]);

    return (
        <>
            <div className="film">
                <h1 className="center-align about-heading">FILM</h1>

                <p>Suka film bergenre Action, Adventure, Western, Martial Arts, Biographical dan Entrepreneur ini film masuk list favorite. Keliatan ngak penting, tapi setidaknya bisa lah chit-chat ngomongin film ini.</p>

                <ul id="tabs-swipe-demo" className="tabs">
                    <li className="tab s6"><a onClick={() => setLabels('tv')} href="#/">TV / Series</a></li>
                    <li className="tab s6"><a onClick={() => setLabels('movies')} href="#/">Movies</a></li>
                </ul>

                

                <div className="row" id="contentFilm">
                    <Films films={filmItems}/>
                </div>
            </div>
        </>
    )
}

export default Film
