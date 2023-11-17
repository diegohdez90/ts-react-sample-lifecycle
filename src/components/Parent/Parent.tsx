import React from 'react'
import Children from './Children';

const Parent = () => {
  return (
    <div>
      Parent
      <Children color='red' />
    </div>
  )
}

export default Parent;
