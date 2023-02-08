import React from 'react'
import girl from '../assets/landing-page-girl.png'
import {Col, Image, Row} from 'react-bootstrap'
import FeelTheMusicCard from '../components/FeelTheMusicCard'

type Props = {}

const Home = (props: Props) =>{
    return (
                <Row style={{ width: '100%', height: '100%'}} className="d-flex align-items-center justify-content- ">
                    <Col>
                    <Image src={girl} alt="My Image" className="d-none d-xxl-block fixed-bottom" style={{height: "75%", width: "450px"}}/>
                    </Col>
                    
                    <Col>
                    <FeelTheMusicCard /></Col>
                </Row>
    )
}

export default Home;