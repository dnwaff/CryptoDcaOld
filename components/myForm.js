import React from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid'

class MyForm extends React.Component{
    render(){
        return (
        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
            <Grid item>
                <DatePicker 
                    selected ={ new Date().setFullYear(new Date().getFullYear() - 4) }
                    popperPlacement = {"left-bottom"}
                ></DatePicker>
            </Grid>
            <Grid item>
                <DatePicker
                    selected ={ new Date()}
                ></DatePicker>
            </Grid>
        </Grid>
        
            )
        }
}

export default MyForm;