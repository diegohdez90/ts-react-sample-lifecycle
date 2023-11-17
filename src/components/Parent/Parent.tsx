import React from 'react'
import Children from './Children';

const Parent = () => {
  return (
    <div>
      Parent
      <Children
        color='red'
        onClick={() => {
          console.log('You have clicked me!!!');
        }}
      />
    </div>
  )
}

export default Parent;
