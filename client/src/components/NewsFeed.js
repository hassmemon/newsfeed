import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsFeed = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a7349ac362904d65b78ae8fdcbc41e85'
            );
            console.log(response);
            setArticles(response.data.articles);
        };
        getArticles();
    }, []);
    return (
        <div>
            {articles.map((article) => {
                return (
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        image={article.image}
                    />
                );
            })}
        </div>
    );
};

export default NewsFeed;
