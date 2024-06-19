import {useState} from 'react'
function App() {
  const model = {
    firstname:'',
    email:'',
    password:'',
    username:''
  }

  const [form , setForm] = useState(model)
   const getFormValue = (e)=>{
    const input = e.target;
    const value = input.value;
    const key = input.name
    setForm({
      ...form,
            [key]: value,
   })
   
   }

   const onSubmit = (e)=>{
e.preventDefault()
   }
  return (
    <>

    <h1>{JSON.stringify(form)}</h1>
     <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-12 w-[350px] shadow-lg rounded-lg">
        <form onClick={onSubmit}>
             <div className="flex flex-col gap-2">
              
              <label className="font-semibold">
                Firstname
              </label>
              <input 
              onChange={getFormValue}
              name="firstname"
              placeholder="Enter first name"
              type="text" 
              className="border p-2 rounded border-gray-300"
              />
               <label className="font-semibold">
                Email
              </label>
              <input 
              onChange={getFormValue}
              name="email"
              placeholder="Enter email"
              type="email" 
              className="border p-2 rounded border-gray-300"
              />
               <label className="font-semibold">
                Password
              </label>
              <input 
              name="password"
              onChange={getFormValue}
              placeholder="Enter first name"
              type="password" 
              className="border p-2 rounded border-gray-300"
              />
               <label className="font-semibold">
                Username
              </label>
              <input 
              name="username"
              onChange={getFormValue}
              placeholder="Enter first name"
              type="text" 
              className="border p-2 rounded border-gray-300"
              />
              <button className="px-3 bg-purple-600 py-2 mt-2">Submit</button>
              
              </div>          


        </form>
      </div>
     </div>
    </>
  )
}

export default App
