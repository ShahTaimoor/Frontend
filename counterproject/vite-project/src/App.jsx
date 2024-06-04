import { useState } from 'react'


function App() {
  let [counter,setcounter] = useState(15)
  let Counter = ()=>{

setcounter((counter)=>{

 if (counter < 20) {
      return counter + 1
 }else{
  return counter
 }
})
  }


   let Remcounter = ()=>{

     setcounter((counter)=>{

 if (counter > 0) {
      return counter - 1
 }else{
  return counter
 }
})
  }


  return (
    <>
     
     <div className='bg-zinc-900 w-full h-screen text-white pt-10'>
 <div  className='text-center flex justify-center items-center flex-col'>
 <h1>COUNTER INCREASE OR DECREASE</h1>
 <button className='px-3 mb-3 mt-3 border-2' onClick={(prev)=> Counter(prev)}>Add {counter}</button>
 <button className='px-3 border-2' onClick={(prev)=> Remcounter(prev)}  >Remove {counter} </button>
 </div>
     </div>
    </>
  )
}

export default App
