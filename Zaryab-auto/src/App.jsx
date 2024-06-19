import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Admin from './components/admin'
import 'remixicon/fonts/remixicon.css'

function App() {
 
  return (
    <>
     
     <BrowserRouter>
       <Routes>

     <Route path='/admin' element={<Admin/>}  />

       </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
