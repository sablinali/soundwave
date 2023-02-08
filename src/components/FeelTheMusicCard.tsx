import React from 'react'
import Card from 'react-bootstrap/Card'
import JoinNowButton from './JoinNowButton'


type Props = {}

const FeelTheMusicCard = (props: Props) => {
  return (
    <Card style={{ width: '18rem', color: 'white' , background: '#2F303A', border: 'none', display: 'grid', gridColumnStart:'2', gridRowStart: '4'}}>
    <Card.Body>
      <Card.Title><h1 style={{fontSize: '50px'}}>Feel The Music</h1></Card.Title>
      <Card.Text>
        <p>Stream over 20 thousand songs with one click</p>
      </Card.Text>
     <JoinNowButton/>
    </Card.Body>
  </Card>
  )
}

export default FeelTheMusicCard