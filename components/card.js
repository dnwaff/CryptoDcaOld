import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },

  heading: {
    height: 30,
    backgroundColor: 'skyblue'
  },

  content:{
    height: 70,
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader className={classes.heading} title={props.info.title} />   
        <CardContent>
          <Typography className={classes.content} align='center' variant="body2" color="textSecondary" component="p">
          {props.info.value}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}