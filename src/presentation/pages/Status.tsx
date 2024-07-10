// src/presentation/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Status: React.FC = () => {
  return (
    <div>
      <h1>Status Component</h1>
      <Link to="/">Go to App</Link>
    </div>
  );
};
