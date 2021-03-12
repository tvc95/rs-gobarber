import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './Pages/Landing';
// import SignUp from './Pages/SignUp';

import AuthContext from './contexts/AuthContext';

function App(): JSX.Element {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Thiago' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
