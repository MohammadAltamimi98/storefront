import React from 'react';
import { activatedCategory } from '../../store/actions/activatedCategory';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
});

function CategoriesComponent(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div>
      <h1>Choose a category :</h1>
      {props.categories.map(category => {
        return (
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
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary">
                check out category
              </Button>

            </CardActions>
          </Card>)
      })} </div>)
};




const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    active: state.categories.active,
  };
};

const mapDispatchToProps = { activatedCategory };

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);


// export default CategoriesComponent;
