import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import Grid from '@mui/material/Grid';

const NewsFeed = ({ articles, categories, selectedCategory }) => {
    // const [articles, setArticles] = useState([]);

    // useEffect(() => {
    //     const getArticles = async () => {
    //         const response = await axios.get(
    //             'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a7349ac362904d65b78ae8fdcbc41e85'
    //         );
    //         console.log(response);
    //         setArticles(response.data.articles);
    //     };
    //     getArticles();
    // }, []);

    ///category variable
    ///move the api key to a dotenv variable, ideally place the api key into a server folder
    //create an api end point on the server  /api/news (for example)
    //<h2>{categories[selectedCategory].label}</h2>;
    return (
        <div>
            <Grid container spacing={2}>
                {articles.map((article) => {
                    return (
                        <NewsItem
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            image={article.urlToImage}
                        />
                    );
                })}
            </Grid>
        </div>
    );
};

export default NewsFeed;
