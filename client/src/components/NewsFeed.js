import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Grid from '@mui/material/Grid';

const NewsFeed = ({ articles, categories, selectedCategory }) => {
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
