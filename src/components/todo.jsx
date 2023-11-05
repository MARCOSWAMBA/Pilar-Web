import { CardActionArea, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Pokemon from '../assets/images/pokemon.png';

const Todo = () => {
  return (
    <Grid item xs={6}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" height="140" image={Pokemon} alt="Pokemon" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Todo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              custom your pokemons
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Todo;
