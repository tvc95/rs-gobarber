import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './Pages/Landing';
// import SignUp from './Pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

function App(): JSX.Element {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
