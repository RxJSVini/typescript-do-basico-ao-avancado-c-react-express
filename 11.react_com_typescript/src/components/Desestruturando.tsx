import React from 'react'

type Props = {
    title:string,
    content:string,
    tags?:string[]
    // 8 - enum
    category:Category
}

export enum Category {
  JS = "Javascript",
  TS = "TYPESCRIPT",
  P = "Python"
}

const Desestruturando = ({title, content, tags}: Props) => {
  return (
    <div>
        <h1>{title}</h1>
        <br/>
        <h2>{content}</h2><br/>
        <br/>
        <h3>{tags}</h3>
    </div>
  )
}

export { Desestruturando };