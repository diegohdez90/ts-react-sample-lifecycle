import React from 'react'

interface Props {
  color: string
}

const Children = ({
  color
}: Props) => {
  return (
    <div>
      Children<br />
      The color is {color}
    </div>
  )
}

export default Children;
