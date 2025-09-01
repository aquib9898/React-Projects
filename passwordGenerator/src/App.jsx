import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(6)
  const [numsAllowed, setnumsAllowed] = useState(false)
  const [symbolsAllowed, setsymbolsAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numsAllowed) { str += "0123456789" };
    if (symbolsAllowed) { str += "!@#$%^&*-_=+[]{}`~" };
    for (let index = 0; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numsAllowed, symbolsAllowed, password])
  return (

    <>
      <div id="maindiv">
        <h1>Password Generator</h1>
        <input type="text" id="textbox" placeholder="Password"></input>
        <div id="copybutton">COPY</div>
        <br />
        <input type="range" min={4} max={24} id="passLength" value={length} onChange={(e) => setlength(Number(e.target.value))}></input>length {length}
        <label style={{ marginLeft: "2vw", display: "inlineBlock" }}>Numbers<input type="checkbox" defaultChecked={numsAllowed}></input></label>
        <label style={{ marginLeft: "2vw", display: "inlineBlock" }}>symbols<input type="checkbox" checked={symbolsAllowed} onChange={()=>{setsymbolsAllowed((prev)=>!prev)}}></input></label>
      </div>

    </>
  )
}

export default App
