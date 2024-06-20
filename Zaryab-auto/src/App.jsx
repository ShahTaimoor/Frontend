import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import NoFound from './components/nofound'
import Products from './components/admin/Product'
import Orders from './components/admin/Orders'
import Dashboard from './components/admin/Dashboard'
import Customer from './components/admin/Customer'
import Payment from './components/admin/Payment'
import Setting from './components/admin/Setting'

function App() {
 
  return (
    <>
    
     <BrowserRouter>
       <Routes>

     <Route path='/admin'> 
           <Route path='products' element={< Products/>}/>
           <Route path='orders'   element={< Orders/>} />
              <Route path='dashboard'   element={< Dashboard/>} />
                 <Route path='customers'   element={< Customer/>} />
                    <Route path='payments'   element={< Payment/>} />
                       <Route path='settings'   element={< Setting/>} />
                      
     </Route>

     <Route path='*' element={<NoFound/>} />

   

       </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
