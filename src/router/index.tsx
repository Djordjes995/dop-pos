import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your components for different routes
import Home from '../pages/Home';
import Login from '../pages/Login';
import { Dashboard as DashboardLayout } from '../layouts/dashboard/Dashboard';
import { Layout as AuthLayout } from '../layouts/auth/Layout';


const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Define your routes using the Route component */}
        <Route path="/" element={
          <DashboardLayout>
            <Home />
          </DashboardLayout>
        }>

        </Route>
        <Route path="/login" element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        } />
        {/* <Route exact path="/about" component={About} /> */}

        {/* Create a NotFound route for any unknown URLs */}
        {/* <Route component={NotFound} /> */}
      </Routes>
    </>
  );
};

export default AppRouter;