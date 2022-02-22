import React from 'react';
import { StackNav } from './navigation/authRoutes';
import { AuthNav } from './navigation/unathenticate';

const Routes = () => {
  return (
    <>
      <StackNav.DashboardStackNav />
      <AuthNav />
    </>
  );
};
export default Routes;
