import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './Pages/Landing';
// import SignUp from './Pages/SignUp';

import AppProvider from './hooks/index';

function App(): JSX.Element {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
