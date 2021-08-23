import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import iphone from '../../assets/iphone.jpg'
import fruits from '../../assets/fruits.jpg'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,

  },
  btn: {
    marginRight: "auto",
    marginLeft: "auto",
  }
});

function Categories() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item md={4}>
          <Card className={classes.root} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="150"
                image={fruits}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Electronics
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Check out our new and wide range of electronics that just arrived. Catch the 35% sales before the 30th-Oct!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.btn}>
              <Button size="large" variant="contained" color="primary" >
                Check Category
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="150"
                image={iphone}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Electronics
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Check out our new and wide range of electronics that just arrived. Catch the 35% sales before the 30th-Oct!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.btn}>
              <Button size="large" variant="contained" color="primary" >
                Check Category
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div >
  )
}

export default Categories
