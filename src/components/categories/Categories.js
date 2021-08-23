import React from 'react';
import { connect } from 'react-redux';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import activatedCategory from '../../store/actions/activatedCategory';


function CategoriesComponent(props) {
  console.log(props);
  return (
    <div>
      <h1>Choose a category :</h1>
      {props.categories.map(category => {
        return (
          <ButtonBase
            key={category.name}
            onClick={() => props.activatedCategory(category.name)}
            style={{ marginLeft: '30px' }}
          >
            <Typography>{category.displayName}</Typography>
            <img
              src={category.url}
              alt={category.displayName}
              width='50'
              height='50'
            ></img>
          </ButtonBase>
        )

      })};
    </div >
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    active: state.categories.active,
  };
};

const mapDispatchToProps = { activatedCategory };

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);

