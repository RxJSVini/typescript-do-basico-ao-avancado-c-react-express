import React, { useState } from 'react'

export const States = () => {
  const [text, setText] = useState<string | null>('Testando o hook');
  return (
    <div>
        <p>O texto é: {text}</p>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}
