import { useEffect, useState } from 'react'

export function App() {
  const [count, setCount] = useState(3);
  const [buttons, setButtons] = useState([]);

  function changingCount(value) {
    setCount(count + value);
  }

  function decrement() {
    changingCount(-1)
  }

  function increment() {
    changingCount(1)
  }

  useEffect(() => {
    const newButtons = []

    for (let button = 0; button <= count; button++) {
      const color = ((button + 1) % 4);
      let classColor = '';
  
      switch (color) {
  
        case 1:
          classColor = 'blue';
          break;
        case 2:
          classColor = 'red';
          break;
        case 3:
          classColor = 'green';
          break;
        default:
          classColor = 'yellow';
          break;
      }
  
      newButtons.push(<button style={{ backgroundColor: classColor }}>Botão {button + 1}</button>)
    }

    setButtons(newButtons);
  }, [count]);

  return (
    <>
      <div>
        <h2>Quantidade de botões:</h2>
        <button onClick={decrement} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>

      {buttons && buttons.map(item => item)}
    </>
  )
}
