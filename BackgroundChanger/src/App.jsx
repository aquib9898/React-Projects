import { useState } from 'react'
import './App.css'

function App() {
  
  const[color,setcolor] = useState("blue")

  return (
    <div id="div1" style={{backgroundColor:color}}> 
    <div id="div2">
      <button  style={{backgroundColor:"red",width:"15vw"}} onClick={() => setcolor("red")}>red</button > 
      <button  style={{backgroundColor:"#A41ECA",width:"15vw"}} onClick={() => setcolor("#A41ECA")}>purple</button >
      <button  style={{backgroundColor:"#0BF2FC",width:"15vw"}}  onClick={() => setcolor("#0BF2FC")}>Turquoise</button > 
      <button  style={{backgroundColor:"#1F5A08",width:"15vw"}}  onClick={() => setcolor("#1F5A08")}>green</button >
    </div>
    </div>


    

  )
}

export default App
