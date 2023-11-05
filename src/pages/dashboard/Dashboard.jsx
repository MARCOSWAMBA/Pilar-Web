import React from 'react';
import { Grid, Paper, Box, styled, MenuItem as MenuItemMui } from '@mui/material';
import { useSelector } from 'react-redux';
import { appSelector } from '../../Redux/appRedux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const tasks = useSelector(appSelector.todo);
  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper sx={{ p: 2 }}>
          <Box>
            Tareas Completadas {'  -  '}
            {completedTasks.length} / {tasks.length}
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper sx={{ p: 2 }}>
          <Box>
            Tareas Pendientes {'  -  '}
            {pendingTasks.length} / {tasks.length}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
