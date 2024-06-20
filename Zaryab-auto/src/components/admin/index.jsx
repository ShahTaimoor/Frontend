import React, { useState } from 'react'

const Admin = () => {

    const [size,setSize] = useState(280)
    const [accountMenu,setAccountMenu] = useState(false)
   
    return (
    <>
    
    <div>
       <aside 
       style={{width: size,transition:'0.3s'}}

       className='w-[280px] bg-indigo-500 fixed top-0 left-0 h-full'>
           
       </aside>

       <section className='bg-gray-100 h-screen' style={{marginLeft:size,transition:'0.3s'}}>
        <nav className='bg-white shadow p-6 flex items-center justify-between'> 
            <div className='flex items-center gap-2 text-xl'>
               <button onClick={()=>setSize(size === 280 ? 0 : 280)} className='hover:bg-indigo-500 px-2 py-1'>
                <i className="ri-menu-2-line text-xl"></i>
               </button>           

               <h1>ZARYAB AUTO</h1>
            </div>

            <div>
                <button className='relative'>
                    <img 
                    onClick={()=>setAccountMenu(!accountMenu)}
                     src="./images/avatar.jpg" alt="" 
                    className='w-10 h-10 rounded-full'/>
                    {
                        accountMenu &&   <div className='absolute top-18 right-0 bg-white shadow-lg p-6 w-[180px] '>
                     
                       
                        <div >
                            <h1 className='text-lg font-semibold'>Taimoor</h1>
                            <p className='text-gray-500'>example@gmail.com</p>
                            <div className='h-px bg-gray-200 my-4'>
                                
                            </div>
                            <button>
                                    <i class="ri-logout-circle-r-line mr-2"></i>
                                    Logout</button>
                        </div>
                    </div> 
                    }
                    
                  
                </button>
            </div>
            
        </nav>
       </section>
    </div>
  
  </>
  )
}

export default Admin
