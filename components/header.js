import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from './datePicker'
import {TextField, Grid, Typography} from '@material-ui/core'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  
  heading: {
    height: 50,
    backgroundColor: 'skyblue'
  },

  textbox:{
    height: 30,
  },

  datepicker:{
    height: 50,
  }
});

export default function MediaCard() {
  const [amount, setAmount]= useState(0);
  const [dateRange, setDateRange] = useState([])

  const classes = useStyles();

  return (
    <div style={{paddingBottom: 20}}>
      <Grid xs={12} className={classes.heading} container justify='center' spacing={1}>
        <Grid item xs={3}>
          <Typography variant="h6" component="h2">
            Dollar Cost Average Calculator
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField 
              onChange={event=> setAmount(event.target.value)}
              InputProps={{className: classes.textbox}}
              variant='outlined' 
              label="amount"/>  
        </Grid>
        <Grid item xs={3}>
          <DatePicker 
          onChange={event=> setDateRange(event.target.value)}
          className={classes.content}
          InputProps= {{className: classes.textbox }}/>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" onClick={()=>{console.log(amount + ':' + dateRange)}}>Calculate</Button>
        </Grid>
      </Grid>
    </div>
  );
}