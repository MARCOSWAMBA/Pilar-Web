import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import NotFound from './layouts/NotFound';
import Dashboard from './dashboard/Dashboard';
import Todo from '../components/todo';
import FetchList from '../components/fetchlist';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [{ path: '', element: <Dashboard /> }],
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [{ path: 'todo', element: <Todo /> }],
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [{ path: 'fetchlist', element: <FetchList /> }],
    },
    { path: '/404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};
export default Routes;
