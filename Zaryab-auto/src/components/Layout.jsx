import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"


const Layout = ({children}) => {
  const menus = [
    {
        label:'Home',
        href: '/'
    },
    {
        label:'Products',
        href: '/products'
    },
    {
        label:'Category',
        href: '/category'
    },
    {
        label:'Contact us',
        href: '/contact-us'
    },
  ]
  const navigate = useNavigate()

  const mobileLink = (e)=>{
    navigate(e)
  }
  const [open,setOpen] = useState(false)
    return (
    <div>

      
      
        <aside className="md:hidden z-50 bg-slate-700 fixed  bottom-0 top-0 left-0 " style={{
          width: open ? 250 : 0,
          transition: '0.3s'
        }}>
    <div className="flex flex-col  gap-8 ">
       {
                menus.map((item,index)=>(
                    
                        <button
                        onClick={()=>mobileLink(item.href)}
                        key={index} 
                        className="text-white hover:bg-black p-4  overflow-hidden"
                        to={item.href}>{item.label}</button>
                    
                ))
            }
    </div>
      </aside>
      
      <nav className='shadow-lg sticky top-0 left-0 bg-white'>
         <div className='w-10/12 mx-auto flex items-center justify-between'>
           <img src="/images/logo.avif" alt="" className='w-16'/>
          <button  className="text-2xl md:hidden flex" onClick={()=> setOpen(!open)}>
            {
            open === false ?
            <i class="ri-menu-2-line"></i>

            :
            <i class="ri-close-circle-line"></i>
            }
            </button>
           
           
           <ul className="md:flex items-center gap-8 hidden">
            {
                menus.map((item,index)=>(
                    <li key={index}>
                        <Link 
                        className="py-6 block text-center hover:bg-blue-500 w-[100px]"
                        to={item.href}>{item.label}</Link>
                    </li>
                ))
            }
            <Link to={'/login'} className="py-6 block text-center hover:bg-blue-500 w-[100px]">Login</Link>
             <Link to={'/signup'} className="py-6 block text-center hover:bg-blue-500 w-[100px]">SignUp</Link>
           </ul>
         </div>
      </nav>
{
    children
}
      <footer className="bg-orange-600  py-16">
        <div className='w-10/12 mx-auto grid md:grid-cols-4 gap-8 md:gap-0'>
        <div>
        <h1 className="text-3xl text-white mb-3">Brands Details</h1>
          <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, recusandae.</p>
          <img src="/images/logo.avif" alt="" className='w-16'/>
        </div>
      <div>
        <h1 className="text-3xl text-white mb-3">Website</h1>
            <ul className="text-white">
            {
                menus.map((item,index)=>(
                    <li key={index}>
                        <Link 
                        className=" block py-1 w-[100px]"
                        to={item.href}>{item.label}</Link>
                    </li>
                ))
            }
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/login'}>SignUp</Link></li>
           
           </ul>
          
        </div>

        <div>
        <h1 className="text-3xl text-white mb-3">Follow Us</h1>
            <ul className="text-white">
            {
                menus.map((item,index)=>(
                    <li key={index}>
                        <Link 
                        className=" block py-1 w-[100px]"
                        to={item.href}>{item.label}</Link>
                    </li>
                ))
            }
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/login'}>SignUp</Link></li>
           
           </ul>
          
        </div>
        <div>
        <h1 className="text-3xl text-white mb-3">Contact us</h1>
          <form  className="space-y-6">
            <input 
            name="fullname"
            type="text" 
            placeholder="your name"
            className="w-full p-3"
            />
            <input 
            name="email"
            type="email" 
            placeholder="your email"
            className="w-full p-3"
            />
            <textarea
            name="message"
            placeholder="message"
            rows={3}
            className="w-full p-3"
            />

            <button className="bg-black text-white py-3 px-6 rounded">Submit</button>
          </form>
        </div>
        </div>
      </footer>

    </div>
  )
}

export default Layout
