import React, { useState, useEffect} from 'react';
import env from 'react-dotenv';
import Articles from '../components/Articles';
import M from 'materialize-css';
import { getAllFavTeams } from '../lib/idb';

const Blog = () => {
    const [articlesItems, setarticlesItems] = useState([]);
    const [pageToken, setPageToken] = useState('');
    const [labels, setLabels] = useState('');
    const [load, setLoad] = useState(true);
    const [articlesEnd, setArticlesEnd] = useState(false);

    const tab = document.querySelectorAll('.tabs');
    M.Tabs.init(tab, {
        swipeable :false
    });

    const getSaved = () => {
        getAllFavTeams().then((articles) => {
            console.log(articles);
            setarticlesItems(articles)
            setArticlesEnd(true);
        })
    }

    useEffect(() => {
        if (load) {
            console.log('Fetching');
            const blog_url = `https://blogger.googleapis.com/v3/blogs/${env.BLOG_ID}/posts?fetchBodies=false&fetchImages=true&key=${env.BLOG_KEY}`;
            
            fetch(`${blog_url}&labels=${labels}&maxResults=10${pageToken}`)
            .then(res => res.json())
            .then(
              (result) => {
                setLoad(false);
                setarticlesItems([...articlesItems, ...result.items]);
                if('nextPageToken' in result){
                    setPageToken(`&pageToken=${result.nextPageToken}`);
                    setArticlesEnd(false);
                } else {
                    setPageToken('');
                    setArticlesEnd(true);
                }
              },
              (error) => {
                console.log(error)
                setLoad(false);
              }
            )  
        }
          
    }, [labels, load]); 

    const getBlog = (label) => {
        setPageToken('');
        setarticlesItems([]);
        setLoad(true);
        setLabels(label);
    }

    const nextLoadMore = () => {
        setLoad(true);
    }

    return (
        <>  
            <div className="blog">
                <div className="row center-align youtube-heading" style={{ padding: '25px 0px 0px 0px' }}>
                    <div className="col s12 m6">
                        <div className="video-container">
                            <iframe title="Youtube @SiISAL" src="//www.youtube.com/embed/NFZpHe5bdzs?rel=0" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <h1 className="about-heading">MY LATEST VIDEO</h1>
                    </div>
                </div> 

                <h1 id="head" className="center-align about-heading">BLOG</h1>

                <ul id="tabs-swipe-demo" className="tabs">
                    <li className="tab s3"><a onClick={() => getBlog('')} href="#/">Semua</a></li>
                    <li className="tab s3"><a onClick={() => getBlog('Entertainment')} href="#/">Entertainment</a></li>
                    <li className="tab s3"><a onClick={() => getBlog('Liat Besok')} href="#/">Liat Besok</a></li>
                    <li className="tab s3"><a onClick={() => getSaved()} href="#/">Saved</a></li>
                </ul>

                <div className="row" id="postBlog" >
                    <Articles articles={articlesItems} getLabelArticle={getBlog} />
                </div>

                <div className="row" id="changePage">
                    <div className="col s12 center-align">
                        <button id="nextPage" onClick={() => nextLoadMore()} className="btn-floating btn-large waves-effect waves-light maincolor" disabled={articlesEnd}>
                            <i className="material-icons">keyboard_arrow_down</i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;
