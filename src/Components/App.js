import React from 'react';

import { HashRouter as Router} from 'react-router-dom';

//Bootstrap
import Container from 'react-bootstrap/Container';

//CSS
import './App.css';

//Containers
import Header from '../Containers/HeaderContainer';
import Footer from '../Containers/FooterContainer';


function App() {
  return (
    <Router>
    <Container className="App">
      <Header />
      <Footer />
    </Container>
    </Router>
  );
}

export default App;
