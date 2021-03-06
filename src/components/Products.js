import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import Container from '@material-ui/core/Container';
import { addProduct } from '../store/actions';
import { decreaseInventory } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux'




const useStyles = makeStyles((theme) => ({
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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));


function Products(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log('state', state);

  const classes = useStyles();
  return (
    <div>
      <br />

      <h1>{state.categories.active}</h1>
      <br />
      {state.categories.active !== null &&
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {state.products?.product?.map((product, idx) => {
              if (state.categories.active === product.category) {
                return (
                  <Grid item key={product.name} xs={12} sm={6} md={4} key={idx}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={product.picture}
                        title={product.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name}
                        </Typography>
                        <Typography>
                          Category: {product.category} <br />

                          Price: {product.price} Jd <br />

                          Inventory: {product.inventory}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {/* <Button size="small" color="primary">
                        View
                      </Button> */}
                        <Button size="small" color="primary" onClick={inventory => {
                          if (product.inventory) {
                            dispatch(addProduct(product));
                            dispatch(decreaseInventory(product))
                          }
                          else alert('out of stock');
                        }}>
                          Add to Cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              }
            })}
          </Grid>
        </Container>}

    </div >
  )
}



// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     products: state.products.products,
//     active: state.categories.active,
//   };
// };

// const mapDispatchToProps = { addProduct, decreaseInventory };


export default Products;
