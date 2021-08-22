import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

class CryptoList extends React.Component{
    render(){
        return(
            <ButtonGroup size="large" color="primary" aria-label="outlined primary button group">
            <Button>BTC</Button>
            <Button>LTC</Button>
            <Button>ETH</Button>
            <Button>ADA</Button>
            </ButtonGroup>
        )
    }
}

export default CryptoList;