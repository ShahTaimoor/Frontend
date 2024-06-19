import React, { useState } from 'react'

const Admin = () => {

    const [size,setSize] = useState(280)
   
    return (
    <>
    
    <div>
       <aside 
       style={{width: size,transition:'0.3s'}}

       className='w-[280px] bg-indigo-500 fixed top-0 left-0 h-full'>
           
       </aside>

       <section className='bg-gray-100 h-screen' style={{marginLeft:size,transition:'0.3s'}}>
        <nav className='bg-white shadow p-6'> 
            <div className='flex items-center gap-2 text-xl'>
               <button onClick={()=>setSize(size === 280 ? 0 : 280)} className='hover:bg-indigo-500 px-2 py-1'>
                <i className="ri-menu-2-line text-xl"></i>
               </button>           

               <h1>ZARYAB AUTO</h1>
            </div>

            <div></div>
            
        </nav>
       </section>
    </div>
  
  </>
  )
}

export default Admin
