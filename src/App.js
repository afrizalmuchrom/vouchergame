import * as React from 'react';
import './App.css';
import Container from '@mui/material/Container';

import Home from './Page/Home';
import Formorder from './Page/Formorder';

function App() {

  React.useEffect(() => {
    document.title = 'Astore'
  }, []);

  return (
    <Container fixed>       
      <Home/>
    </Container>
  );
}

export default App;
