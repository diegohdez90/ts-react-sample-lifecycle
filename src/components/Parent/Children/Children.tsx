import React from 'react'

interface Props {
  color: string,
  onClick: () => void
}

const Children: React.FC<Props> = ({
  color,
  onClick
}: Props) => {
  return (
    <div>
      Children<br />
      The color is {color}
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}

export default Children;
