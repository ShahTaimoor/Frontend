import { useState } from 'react'

function App() {
const [color , setColor] = useState('olive')
  return (
    <>
        

        <div className=' relative w-full h-screen bg-zinc-900' style={{backgroundColor :color}}>
             <div className='absolute bottom-10 left-40 space-x-10'>
              <button style={{backgroundColor: "purple"}} onClick={() => setColor("purple")} className='px-3 py-2 rounded-md border-2 hover:bg-white   '>Purple</button>
              <button style={{backgroundColor: "red"}} onClick={() => setColor("red")} className='px-3 py-2 rounded-md border-2 hover:bg-white   '>Red</button>
              <button style={{backgroundColor: "orange"}} onClick={() => setColor("orange")} className='px-3 py-2 rounded-md border-2 hover:bg-white   '>Orange</button>
              <button style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")} className='px-3 py-2 rounded-md border-2 hover:bg-white   '>Yellow</button>
             </div>
        </div>


    </>
  )
}

export default App
