import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './Pages/Landing';
// import SignUp from './Pages/SignUp';

function App(): JSX.Element {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
}

export default App;
