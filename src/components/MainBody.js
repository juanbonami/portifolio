import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import profilepic from '../images/yaboi.jpg';

export class MainBody extends Component {
    render() {
        return (
            <div style={{border: 'solid', }}>
                <Grid celled='internally' centered columns={1}>
                    <h1>Juan Bonami</h1>
                </Grid>

                <Grid celled='internally' centered columns={1}>
                    <Grid.Column width={3}>
                        <Image circular src={profilepic} />
                    </Grid.Column>
                </Grid>

                <Grid celled='internally' centered>
                    <Grid.Column width={13}>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </Grid.Column>                  
                </Grid>
            </div>
        )
    }
}

export default MainBody
