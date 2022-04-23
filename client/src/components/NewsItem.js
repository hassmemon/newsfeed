import React from 'react';

const NewsItem = ({ title, description, url, image }) => {
    return (
        <div className='news-item'>
            <img className='news-img' src={image} alt={image} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default NewsItem;
