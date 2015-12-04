import React from 'react'
import {Card,CardTitle,CardText,CardActions,Button} from 'react-mdl'

const Home = ()=> (
    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
        <CardTitle expand style={{  color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Welcome</CardTitle>
        <CardText>
            ...to my amazing homepage!
        </CardText>
    </Card>
)

export default Home;