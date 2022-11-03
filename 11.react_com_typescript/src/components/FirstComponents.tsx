import React from 'react'
// 3 - Components
type Props = {
    tech:string;
}


const FirstComponents = (props: Props) => {
  return (
    <div>Meu primeiro component com {props.tech}</div>
  )
}

export default FirstComponents