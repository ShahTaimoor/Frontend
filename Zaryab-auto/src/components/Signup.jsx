import { Link } from "react-router-dom"
const Signup = () => {
   
  return (

    <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden">
        <img src="/images/signup.svg" alt="" className='  w-full h-full' />
        <div className="flex flex-col justify-center p-8 md:p-16">
            <h1 className="text-4xl font-bold">New User</h1>
            <p className="text-lg text-gray-600">Create Your Account</p>
        
        <form className="mt-8 space-y-4">
            <div className="flex flex-col">
                <label className="mb-1 text-lg font-semibold">FullName</label>
                <input 
                name="fullname"
                required
                placeholder="Your Name"
                type="text" className=" outline-none p-3 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col">
                <label className="mb-1 text-lg font-semibold ">Email</label>
                <input 
                name="email"
                required
                placeholder="Your Email"
                type="email" className=" outline-none p-3 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col relative  ">
                <label className="mb-1 text-lg font-semibold ">Password</label>
                <input 
                required
                name="password"
                placeholder="************"
                type='password' className=" outline-none p-3 border border-gray-300 rounded" />
         
            </div>

            <button className="bg-blue-600 text-white hover:bg-rose-500 hover:text-white py-3 px-8 rounded font-semibold">Signup</button>
        </form>
        <div>
            Already have an account ? <Link to={'/login'} className="text-blue-600 font-semibold">  Signin </Link>
        </div>
        </div>
    </div>

  )
}

export default Signup
