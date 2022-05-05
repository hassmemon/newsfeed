// const NewsItem = ({ title, description, url, image }) => {
//     return (
//         <div className='news-item'>
//             <img className='news-img' src={image} alt={image} />
//             <h1>{title}</h1>
//             <p>{description}</p>
//         </div>
//     );
// };

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function NewsItem({ title, description, url, image }) {
    return (
        <Grid item xs={4}>
            <Item>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia component='img' height='140' image={image} />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {title}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={url}>
                            {' '}
                            <Button size='small'>Learn More</Button>{' '}
                        </a>
                    </CardActions>
                </Card>
            </Item>
        </Grid>
    );
}

export default NewsItem;
