// src/main/router.ts
import { createBrowserRouter } from 'react-router-dom';
import { Status } from '../../presentation/pages/Status';
import { Home } from '../../presentation/pages/Home';
import { makeGetTasks } from '../../main/factories/makeGetTasks';

export const createAppRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Home loadMakeGetTasks={makeGetTasks()} />,
    },
    {
      path: '/status',
      element: <Status />,
    },
  ]);
};
