import React from 'react'

function activatedCategory(name) {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};

export default activatedCategory;
