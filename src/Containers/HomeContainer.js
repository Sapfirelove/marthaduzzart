import React from 'react';
import '../Components/App.css';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

//Assets
import bgimg from '../Assets/jumbotronbg.png';
import redbubble from '../Assets/redbubble.png';

//Icons
import { SocialIcon } from 'react-social-icons';

function Home() {
    return (
        <Container>
            <Jumbotron className="mt-2">
                <Card>
                    <Card.Img  src={bgimg} />
                </Card>
                <Container className="mt-3">
                   <p>At the age of six was when I gained an understanding that with a pencil you could create something. I also found out your parents don’t like it when you draw on their walls with markers. </p>
                   <p>From there I was drawing every day. You know when the hands look like balloons and way too large for their body. As I got older I started watching a YouTube Creator by the name of <a href="https://www.youtube.com/user/markcrilley"> Mark Crilley </a> where I learned basic skills.</p>
                   <p>I was taking every art class my high school provided until I graduated. At the age of 17 was when I was getting serious about my art. I wanted to draw more while showing everyone I knew my work. I created all my social media, set up my shop, and was ready to go.</p>
                   <p>My next adventure starts now!</p>
                </Container>
            </Jumbotron>
            <Container>
                <CardDeck>
                    <Card className="Card">
                        <Card.Body>
                            <Card.Title className="text-center">Contact</Card.Title>
                            <Container className="p-2 text-center" >
                            <SocialIcon className="socialLink" url="http://facebook.com/marthaduzzart04" target="_blank" style={{ height: 100, width: 100 }} />
                            <SocialIcon className="socialLink" url="http://instagram.com/marthaduzzart" target="_blank" style={{ height: 100, width: 100 }} />
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card className="Card">
                        
                        <Card.Body>
                            <Card.Title className="text-center">Shop</Card.Title>
                            <Card.Img variant="top" src={redbubble} />
                            
                            <Card.Text className="pt-3">
                                Want to purchase one of my artwork on merchandise?
                            </Card.Text>
                            <Button variant="dark"><a href="https://www.redbubble.com/people/marthaschiebel/shop" style={{color:'#fff'}}>Shop Now</a></Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </Container>
    )
}

export default Home;