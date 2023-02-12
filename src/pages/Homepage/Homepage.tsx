import React from 'react'
import girl from '../../assets/landing-page-girl.png'
import {Col, Image, Row} from 'react-bootstrap'
import FeelTheMusicCard from '../../components/FeelTheMusicCard'
import './Homepage.css';

type Props = {}

const Home = (props: Props) =>{
    return (
                <Row style={{ width: '100%', height: '100vh' }} className="d-flex align-items-center justify-content-center">
                    <Col>
                    <Image src={girl} alt="My Image" className="d-none d-lg-block" style={{bottom: 0, height: "100%", width: "500px"}}/>
                    </Col>
                    
                    <Col>
                    <FeelTheMusicCard /></Col>
                </Row>
    )
}

export default Home;


