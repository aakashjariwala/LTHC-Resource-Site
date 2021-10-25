import { useState } from 'react'

function App() {
  const [operand1, setOperand1] = useState(0)
  const [operand2, setOperand2] = useState(0)
  const [result, setResult] = useState(0)

  const onOperand1Change = (e) => {
    setOperand1(parseInt(e.target.value, 10))
  }

  const onOperand2Change = (e) => {
    setOperand2(parseInt(e.target.value, 10))
  }

  const onAdd = () => {
    setResult(operand1 + operand2)
  }

  return (
    <div>
      <div>
        <div>
          <label htmlFor="operand1">Operand 1</label>
          <input id="operand1" type="text" onChange={onOperand1Change} />
        </div>
        <div>
          <label htmlFor="operand2">Operand 2</label>
          <input id="operand2" type="text" onChange={onOperand2Change} />
        </div>
      </div>
      <button type="button" onClick={onAdd}>
        Add
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
