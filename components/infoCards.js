import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from './card'
import Typography from '@material-ui/core/Typography';
import MainCard from '@material-ui/core/Card';
import { CardHeader, CardActionArea, CardContent  } from '@material-ui/core';
const data = [
    {title: 'average Price' , value: 57.86750000000001},
    {title: "percent Gains", value: 115.02944940904551},
    {title: 'total AmountPaid', value: 12000},
    {title: 'total Coins', value: 229.10000824900527},
    {title: "total Valuation", value: 25803.53392908546}
    ]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft: 50,
      paddingRight: 50,
      paddingBottom: 20
    },
  }));

export default function InfoCards(props) {
    const classes = useStyles();
    const [info, setInfo] = useState([
        {title: 'average Price' , value: 57.86},
        {title: "percent Gains", value: 115},
        {title: 'total AmountPaid', value: 12000},
        {title: 'total Coins', value: 229},
        {title: "total Valuation", value: 25803}
        ])
    
    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={3}>
            <Card/>
          </Grid>
          <Grid item xs={3}>
            <Card/>
          </Grid>
          <Grid item xs={3}>
            <Card/>
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <MainCard>
            <CardContent>
            <CardHeader title="Coin info" />
            <Grid container spacing={6}>
                <Grid container item xs={12} spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={3}>
                        <Card info= {info[0]} />
                    </Grid>
                    <Grid item xs={3}>
                        <Card info= {info[1]} />
                    </Grid>
                    <Grid item xs={3}>
                        <Card info= {data[2]} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={3}>
                        <Card info= {data[3]} />
                    </Grid>
                    <Grid item xs={3}>
                        <Card info= {data[4]} />
                    </Grid>
                    <Grid item xs={3}>
                        <Card info= {data[1]} />
                    </Grid>
                </Grid>
            </Grid>
            </CardContent>
        </MainCard>
      </div>
    );
  }