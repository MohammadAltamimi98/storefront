import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { If } from 'react-if';
import { removeFromCart } from '../store/actions/index';
import './simplecart.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(5),
  },
}));

const SimpleCart = props => {
  const classes = useStyles();

  // console.log(props);
  return (
    <>
      <If condition={() => props.cart.length !== 0}>
        <Paper component='ul' className={classes.root}>
          {props.cart.map((element, idx) => {
            // console.log(item);
            return (
              <li key={idx}>
                <Chip
                  label={element.name}
                  onDelete={() => {
                    props.removeFromCart(element);
                  }}
                />
              </li>
            );
          })}
        </Paper>
      </If>
    </>
  );
};
const mapStateToProps = state => {
  return { cart: state.cart.cart };
};
const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);