import { useState } from "react"

function App() {

const [show, setShow] = useState(true)
const [bgcolor, setBgColor] = useState('yellow')
const [value , setValue] = useState('')
const [fontSize , setFontSize] = useState(30)
const [color , setColor] = useState('green')

return (
    <>
   <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <h1>Show And Hide App</h1>
       {show && <img src="/1.jpeg" alt=""  width='500px'/>}
       <button onClick={()=>setShow(!show)} style={{width:'100px', margin:'10px'}}> {!show ? 'Show' : 'Hide' } </button>
   </div>

   <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <h1>Background Toggle</h1>
       <div style={{width:'300px',height:'300px',background:bgcolor,borderRadius:16}}>

       </div>
       <button onClick={()=>setBgColor(bgcolor === 'yellow' ? 'blue' : 'yellow')} style={{width:'100px', margin:'10px'}}> {bgcolor === 'yellow' ? 'yellow' : 'blue' } </button>
   </div>

<div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <h1>Live Input Preview</h1>
          <input style={{width:'500px'}} onChange={(e)=> setValue(e.target.value)} type="text" />
          <h1>{value}</h1>
          </div>
     

     <div>
      <h2>Font Size</h2>
      <p style={{fontSize:fontSize}}>Taimoor</p>
      <input type="range" min="30" max="200" step='1'onChange={(e)=> setFontSize(Number(e.target.value))}/>

     </div>

     <div>
      <h1>Color Value Sample</h1>
      <input type="text" onChange={(e)=>setColor(e.target.value)} value={color}/>
      <div style={{width:'300px',height:'300px',background:color,marginTop:'20px'}}>

      </div>
     </div>
    </>
  )
}

export default App
