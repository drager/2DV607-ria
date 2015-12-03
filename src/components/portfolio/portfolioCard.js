/**
 * Created by dav on 2015-12-03.
 */
import React, {Component} from 'react'
import {Card,CardText} from 'react-mdl'

export class PortfolioCard extends Component {
    render(){
        return (
            <div style={{width: '80%', margin: 'auto'}}>
                <Card>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor ligula nec sapien fringilla malesuada sit amet a lacus. Curabitur cursus enim urna, vitae dictum orci eleifend non. Duis pellentesque dolor massa. Sed in venenatis risus. Sed semper erat sed dignissim laoreet. Nullam eget malesuada turpis. Aenean iaculis diam ut velit vehicula, et semper nisi tincidunt. Sed eu lacus nec justo tincidunt posuere. Fusce euismod ex eget metus fringilla laoreet et nec diam. Donec mattis convallis elit sit amet tempus. Nulla consectetur, urna non sodales posuere, tellus nulla finibus arcu, non volutpat mi neque vitae est.
                    </CardText>
                </Card>
            </div>
        )
    }
}