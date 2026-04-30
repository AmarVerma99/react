import {useState} from 'react'

function Calculator() {

  const [input, setInput] = useState("")

  const handleClick = (value) => {
    setInput(input + value)
  }

  const clear = () => {
    setInput("")
  }

  const calculate = () => {
    try {
      setInput(eval(input).toString())
    } catch {
      setInput("Error")
    }
  }

  return (
     <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      
      <div className="bg-white p-5 rounded-xl shadow-lg w-64">
        
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 p-2 border rounded text-right text-xl"
        />

        <div className="grid grid-cols-4 gap-2">

          <button onClick={clear}>C</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={calculate} className="row-span-2 bg-green-400">=</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>

          <button onClick={() => handleClick("0")} className="col-span-2">0</button>
          <button onClick={() => handleClick(".")}>.</button>

        </div>
      </div>
    </div>
  )
}

export default Calculator