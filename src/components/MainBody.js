import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import profilepic from '../images/yaboi.jpg';

export class MainBody extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image src={profilepic} />
                        </Grid.Column>

                        <Grid.Column width={13}>
                            <Image src />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default MainBody
