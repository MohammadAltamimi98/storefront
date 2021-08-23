import React from 'react'

const activatedCategory = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};

export default activatedCategory;
