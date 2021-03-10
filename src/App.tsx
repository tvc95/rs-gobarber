import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './Pages/Landing';

function App(): JSX.Element {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
}

export default App;
