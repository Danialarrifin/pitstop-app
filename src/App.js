import * as React from 'react';
import Navigation from './navigations/main'
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
