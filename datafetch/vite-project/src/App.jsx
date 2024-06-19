import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from 'axios'

function App() {
const [photos , setPhotos] = useState([])
const [loading,setLoading] = useState(false)

useEffect(()=>{
test()  

},[])



  const test = async ()=>{
    
    try {
      setLoading(true)
      const response = await axios.get('https://fakestoreapi.com/products')
      const data = response.data
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }finally{
       setLoading(false)
    }


  }
  
  return (
    <>


      <h1>Taimoor</h1>
    
      <button onClick={test} >Test</button>
      {
        loading && 
        <h1><AiOutlineLoading3Quarters fa-spin /></h1>
      }
<div style={{width:'80%',display:"flex",alignItems:"center", gap:40 , flexWrap:'wrap' , justifyContent:"center",margin:'0 auto',textAlign:'center'}}>
        {

        photos.map((item , index)=>(
            <div key={index} style={{
              width:'calc(25% - 40px)',border:'1px solid #ddd'
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