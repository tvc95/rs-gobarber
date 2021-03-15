import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './Pages/Landing';
// import SignUp from './Pages/SignUp';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

function App(): JSX.Element {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
