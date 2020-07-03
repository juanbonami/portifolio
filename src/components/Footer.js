import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div style={{backgroundColor: 'green', color: 'white', padding: 14}}>
                    <p> <b>&copy;{new Date().getFullYear()} Portifolio | All Rights Reserved</b> </p>
                </div>
                <div style={{padding: 70, backgroundColor: '#3d9051'}}>

                </div>
            </div>
        )
    }
}

export default Footer
