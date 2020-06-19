import React from 'react';

//Router
import { HashRouter as Switch, Route, Link } from 'react-router-dom';


//Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//Containers
import GalleryContainer from '../Containers/GalleryContainer';
import Home from '../Containers/HomeContainer'

class Header extends React.Component {
    render() {
        return (
            <Container>
                <Navbar className="justify-content-center">
                    <Nav>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/Gallery">Gallery</Link>
                    </Nav>
                </Navbar>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Gallery" component={GalleryContainer} />
                </Switch>
  
            </Container>
        );
    }
}

export default Header;