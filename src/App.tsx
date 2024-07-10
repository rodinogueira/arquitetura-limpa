// src/App.tsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createAppRouter } from './main/routes/';

const App: React.FC = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};

export default App;
