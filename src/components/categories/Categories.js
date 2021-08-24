import React from 'react';
import { activatedCategory } from '../../store/actions/activatedCategory';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      <h1>Choose a category :</h1>
      <Container className={classes.cardGrid} maxWidth="md">

        <Grid container spacing={4}>
          {props.categories.map(category => {
            return (
              <>
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.root} key={category.name}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={category.url}
                        title={category.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {category.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {category.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <button onClick={() => props.activatedCategory(category.name)} >
                        check out category
                      </button>
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

const mapDispatchToProps = { activatedCategory };

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);



