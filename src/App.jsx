import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(1);
  const buttons = [];

  const colors = {
    1: 'blue',
    2: 'red',
    3: 'green',
    0: 'yellow',
  }

  for (let button = 0; button < count; button++) {
    const color = (button % 4);

    buttons.push(<button key={Math.random()} style={{backgroundColor: colors[color]}}>Botão {button + 1}</button>)    
  }

  return (
    <>
      <div>
        <h2>Quantidade de botões:</h2>
        <button onClick={() =>setCount(currentCount => currentCount-1)} disabled={count<=1}>-</button>
        <span>{count}</span>
        <button onClick={() =>setCount(currentCount => currentCount+1)}>+</button>     
      </div>

      {buttons && buttons.map(item => item)}
    </>
  )
}
