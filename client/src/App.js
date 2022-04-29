import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import NewsFeed from './components/NewsFeed';
import Buttons from './components/Buttons';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const categories = [
    // {
    //     id: 0,
    //     label: 'BBC',
    //     url: 'bbc-news',
    // },
    {
        id: 0,
        label: 'MSNBC',
        url: 'msnbc',
    },
    {
        id: 1,
        label: 'CNN',
        url: 'cnn',
    },
    {
        id: 2,
        label: 'The Washington Post',
        url: 'the-washington-post',
    },
    {
        id: 3,
        label: 'Wall Street Journal',
        url: 'the-wall-street-journal"',
    },
    {
        id: 5,
        label: 'The American Conservative',
        url: 'the-american-conservative',
    },
    {
        id: 6,
        label: 'Fox News',
        url: 'fox-news',
    },
];

function App() {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [articles, setArticles] = useState([]);

    return (
        <div className='App'>
            <h1 className='heading'>Spectrum</h1>
            <Buttons
                categories={categories}
                onClick={(category) => {
                    setSelectedCategory(category.id);
                    axios
                        .get(
                            `https://newsapi.org/v2/top-headlines?sources=${categories[selectedCategory].url}&apiKey=${process.env.REACT_APP_API_KEY}`
                        )
                        .then((response) => {
                            console.log(response);
                            setArticles(response.data.articles);
                        });
                }}
            />
            <NewsFeed
                categories={categories}
                selectedCategory={selectedCategory}
                articles={articles}
            />
        </div>
    );
}

export default App;
