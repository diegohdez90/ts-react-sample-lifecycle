import React from 'react'

interface Props extends React.PropsWithChildren {
  color: string,
  onClick: () => void,
}

const Children: React.FC<Props> = ({
  color,
  onClick,
  children
}) => {
  return (
    <div>
      Children<br />
      The color is {color}
      <button onClick={onClick}>Click me!</button>
      {children}
    </div>
  )
}

export default Children;
