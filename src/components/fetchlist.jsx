import { CardActionArea, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Pokebola from '../assets/images/pokebola.png';

const FetchList = () => {
  return (
    <Grid item xs={6}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" height="140" image={Pokebola} alt="Pokemon" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fetch List
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fetch your Pokemons
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default FetchList;
