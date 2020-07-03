import React, { Component } from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'
import profilepic from '../images/yaboi.jpg';

export class MainBody extends Component {
    render() {
        return (
            <div style={{paddingTop: 140}} >
                <Grid centered columns={1}>
                    <Grid.Row centered columns={3}>
                        <Grid.Column>
                            <Image 
                                centered
                                circular
                                size='medium'
                                src={profilepic}
                            />
                            <ul style={{listStyleType: 'none'}}>
                                <br/>
                                <li> <Icon circular name='mail' /> juanbonami@gmail.com</li>                              
                                <li> <Icon circular name='github' /> <a href="https://github.com/juanbonami"> Github </a></li>
                                <li> <Icon circular name='linkedin' /> <a href="https://www.linkedin.com/in/juan-bonami-261909128/">LinkedIn</a></li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column>
                            <h1 className="font">Hi, I'm Juan Bonami</h1>
                            <h3 className="fontTwo"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h3>
                        </Grid.Column>
                    </Grid.Row>  
                </Grid> 
            </div>
        )
    }
}

export default MainBody
