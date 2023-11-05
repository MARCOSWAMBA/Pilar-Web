import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  styled,
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  MenuItem as MenuItemMui,
  ListItemText,
} from '@mui/material';
import Pokemon from '../../assets/images/pokemon.png';
import Pokebola from '../../assets/images/pokebola.png';
import { fetchlist, todo } from '../../constants/menu';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box>Dashboard</Box>
          </Paper>
        </Grid>

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
            <CardActions>
              <Button size="small" color="primary">
                {todo.map((item) => (
                  <MenuItemMui
                    key={item.title}
                    to={item.path}
                    component={RouterLink}
                    onClick={() => setOpen(false)}
                    sx={{ py: 1, px: 2.5 }}
                  >
                    <ListItemText disableTypography>{item.title}</ListItemText>
                  </MenuItemMui>
                ))}
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia component="img" height="140" image={Pokebola} alt="Pokebola" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fetch List
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fetch your Pokemons
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                {fetchlist.map((item) => (
                  <MenuItemMui
                    key={item.title}
                    to={item.path}
                    component={RouterLink}
                    onClick={() => setOpen(false)}
                    sx={{ py: 1, px: 2.5 }}
                  >
                    <ListItemText disableTypography>{item.title}</ListItemText>
                  </MenuItemMui>
                ))}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboard;
