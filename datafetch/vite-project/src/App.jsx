import { useEffect, useState } from "react";


function App() {
const [photos , setPhotos] = useState([])

useEffect(()=>{
test()  

},[])
  const test = async ()=>{
    try{
       const response = await fetch('https://fakestoreapi.com/products')
          let data = await response.json();
          console.log(data);
          setPhotos(data)
          
      }
    catch(err){
console.log(err);
    }

    
    
    

  }
  
  return (
    <>


      <h1>Taimoor</h1>
    
      <button onClick={test} >Test</button>
<div style={{width:'80%',display:"flex",alignItems:"center", gap:40 , flexWrap:'wrap' , justifyContent:"center",margin:'0 auto'}}>
        {

        photos.map((item , index)=>(
            <div key={index} style={{
              width:'calc(25% - 40px)'
              }}>

              <img src={item.image} alt="" width='120px'/>
              <h1 style={{fontSize:'14px'}}>{item.title}</h1>
               <p>{item.description.slice(0,80)}</p>
              </div>
                  
            
        ))
      }
      </div>
    </>
  )
}

export default App