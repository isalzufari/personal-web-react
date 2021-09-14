import React from 'react';
import { saveFavArticle, deleteFavArticle, checkFavorite } from '../lib/idb';

const Articles = ({articles, getLabelArticle}) => {

    const formatted_date = (published) => {
        const months = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const current_datetime = new Date(published);
        const formatted_date = months[current_datetime.getMonth()] + ' ' + current_datetime.getDate() + ', ' +  current_datetime.getFullYear();
        return formatted_date;
    }

    const thumbImages = (thumb) => {
        try {
            if (thumb === undefined) {
                thumb = '/dist/img/BlogBlank.png';
            } else {
                const replaceThumb = thumb.url = thumb[0].url.replace(/.*?:\/\//g , "https://cdn.statically.io/img/");
                return replaceThumb;
            }
        } catch (err) {
            thumb = '/dist/img/BlogBlank.png';
        }
    }
    
    const getLabel = (labels) => {
        if (labels === undefined) {
            return labels = '-';
        }
        return labels.join(', ');
    }

    const favPost = (article) => {
        saveFavArticle(article);
        document.getElementById(`fav${article.id}`).style.display = 'none';
        document.getElementById(`del${article.id}`).style.display = 'block';
    }

    const delPost = (article) => {
        deleteFavArticle(article)
        document.getElementById(`fav${article.id}`).style.display = 'block';
        document.getElementById(`del${article.id}`).style.display = 'none';
    }

    const checkFav = (id) => {
        checkFavorite(id).then(() => {
            document.getElementById(`fav${id}`).style.display = 'none';
            document.getElementById(`del${id}`).style.display = 'block';
        }).catch(() => {
            document.getElementById(`fav${id}`).style.display = 'block';
            document.getElementById(`del${id}`).style.display = 'none';
        });
    }

    console.log(articles)
    if (articles.length === 0) return (
        <div id="loader" className="center-align">
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        </div>
    );

    return (
        <>
            {articles.map((article, index) => (
                <div key={index} data-aos="fade-up" className="col s12 m6 l4">
                    <div className="card" style={{ width: "100%" }}>
                        <div className="card-image">
                            <a href={article.url} target='_blank' rel='noreferrer'>
                                <img src={thumbImages(article.images)} alt={article.title} />
                            </a>
                            <button onLoad={checkFav(article.id)} className='btn-floating halfway-fab waves-effect waves-light maincolor' onClick={() => favPost(article)} id={`fav${article.id}`}>
                                <i className='material-icons'>bookmark_border</i>
                            </button>
                            <button onLoad={checkFav(article.id)} className='btn-floating halfway-fab waves-effect waves-light maincolor' onClick={() => delPost(article)} id={`del${article.id}`}>
                                <i className='material-icons'>bookmark</i>
                            </button>
                        </div>
                        <div className="card-content">
                            <p className="truncate">{article.title}</p>
                            <p>{formatted_date(article.published)}</p>
                            <div className="right-align">
                                <a href="#/" onClick={() => getLabelArticle(article.labels)}>
                                    <div className="chip">
                                        {getLabel(article.labels)}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Articles
