import React from 'react'
import logo from '../images/Bitcoin.svg'

class MyImage extends React.Component{
    constructor(){
        super();
        this.state = {
            logo: 'undefined'
        };
    }

    componentDidMount(){
       const coin = this.props.coin;
       this.imageFilename = coin + '.svg'
       //this.logo = images('./'+ coin +'.svg');
       this.state.logo = require('../images/Bitcoin.svg');
       console.log(this.state.logo)
        
    }
    render(){
        const file  = require('../images/Bitcoin.svg')
        return (<img src={logo} className="App-logo" alt="logo" />);
    }
}

export default MyImage;