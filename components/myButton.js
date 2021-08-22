import React from 'react'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyButton extends React.Component{

    render(){
        return (<Button  variant="outline-primary" >{this.props.coin}</Button>);
    }
}

export default MyButton;