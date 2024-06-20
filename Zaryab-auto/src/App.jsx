import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import NoFound from './components/nofound'
import Products from './components/admin/Product'
import Orders from './components/admin/Orders'
function App() {
 
  return (
    <>
    
     <BrowserRouter>
       <Routes>

     <Route path='/admin'> 
           <Route path='products' element={< Products/>}/>
           <Route path='orders'   element={< Orders/>} />
     </Route>

     <Route path='*' element={<NoFound/>} />

   

       </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
