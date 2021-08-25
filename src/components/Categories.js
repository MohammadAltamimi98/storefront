import React from 'react';
import { activeCategory } from '../store/actions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from 'react-bootstrap/Button';

import './categories.scss'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  // cardGrid: {
  //   paddingTop: theme.spacing(8),
  //   paddingBottom: theme.spacing(8),
  // },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
});

function CategoriesComponent(props) {
  const classes = useStyles();
  // console.log(props);
  return (
    <div>
      <br />
      <h1>CHOOSE CATEGORY :</h1>
      <br />
      <Container className={classes.cardGrid} maxWidth="md">

        <Grid container spacing={6}>
          {props.categories.map((category, idx) => {
            return (
              <>
                <Grid item sm={6} key={idx}>
                  <Card className={classes.root} key={category.name}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={category.url}
                        title={category.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" className="title" component="h2">
                          {category.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className="desc" component="p">
                          {category.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button className="btn" onClick={() => props.activeCategory(category.name)} >
                        check out category
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                < br />
              </>
            )
          })}
        </Grid>
      </Container>

    </div >)
};




const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    active: state.categories.active,
  };
};

const mapDispatchToProps = { activeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);



