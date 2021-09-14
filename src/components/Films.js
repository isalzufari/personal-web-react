import React from 'react'

const Films = (films) => {
    const formatted_date = (first_air_date) => {
        const months = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const current_datetime = new Date(first_air_date);
        const formatted_date = months[current_datetime.getMonth()] + ' ' + current_datetime.getDate() + ', ' +  current_datetime.getFullYear();
        return formatted_date;
    }

    const posterImg = (poster_path) => {
        return poster_path =  `//image.tmdb.org/t/p/w500${poster_path}`;
    }

    console.log(films)

    if (!films.films) return (
        <div id="loader" className="center-align">
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        </div>
    );

    return (
        <>
            {films.films.map((film, index) => (
                <div key={index} data-aos='fade-up' className='col s12'>
                    <div className='card'>
                        <div className='row'>
                            <div className="col s12 m3">
                                <div className='card-image'>
                                    <img src={posterImg(film.poster_path)} alt={film.name || film.title} />
                                </div>
                            </div>
                            <div className='col s12 m9'>
                                <div className='card-stacked'>
                                    <div className='card-content'>
                                        <h5>{film.name || film.title}<span className='badge red white-text'><i>{film.vote_average}</i></span></h5>
                                        <p className='truncate'>{film.overview}</p>
                                    <br/>
                                        <span>Rilis : {formatted_date(film.first_air_date)}</span>
                                        <p>My Vote : {film.rating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Films
