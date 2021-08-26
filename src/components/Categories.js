import React from 'react';
import { activeCategory } from '../store/actions/index';
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
import { getApiDataCategory } from '../store/action-creator/thunk';
import { useEffect } from 'react';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
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
}));

function CategoriesComponent(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getApiDataCategory();

    console.log(props);
  }, []);

  // console.log(props);
  return (
    <div>
      <br />
      <h1>CHOOSE CATEGORY :</h1>
      <br />
      <Container className={classes.cardGrid} >

        <Grid container spacing={8}>
          {props.categories.map((category, idx) => {
            console.log(category);
            return (
              <div key={idx}>
                <Grid item className={classes.root} lg={12} >
                  <Card key={idx}>
                    <CardActionArea>
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
                      <Button className="btn" onClick={() => props.activeCategory(category)} >
                        check out category
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                < br />
              </div>
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

const mapDispatchToProps = { activeCategory, getApiDataCategory };

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);



