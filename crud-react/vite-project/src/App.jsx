import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'

function App() {
const [edit,setEdit] = useState(null)
const[open,setOpen] = useState(-550)
const [students, setStudent] = useState([])
const [form,setForm] = useState({
  fullname:'',
  class:'',
  roll:'',
  subject:'',
  Date:''
})

const handleDrawer =()=>{
setOpen(0)
}

const handleInput = (e)=>{
const input = e.target;
const value = input.value;
const key = input.name;

setForm({
  ...form,
  [key]: value
})


}

 
const createStudent = (e)=>{
  e.preventDefault();
  setStudent([
    ...students,
    form]);
setForm({
  fullname:'',
  class:'',
  roll:'',
  subject:'',
  Date:''
})
setOpen(-550)
}

let deleteStudents = (index)=>{
  const backup = [...students]
  backup.splice(index,2)
  setStudent(backup);
}

let editStudent = (index)=>{
setOpen(0)
setForm(students[index])
setEdit(index)
}

let saveStudent = (e)=>{
e.preventDefault()
const backup = [...students]
backup[edit] = form
setStudent(backup)
setOpen(-550)
setEdit(null)
}

let closeDrawer = ()=>{
  setOpen(-550)
  setForm({
  fullname:'',
  class:'',
  roll:'',
  subject:'',
  Date:''
})
setEdit(null)
}



  return (
    <>
     <div style={{minHeight:'100vh',background:'#ddd'}}>
       <div style={{width:'70%',background:'white',margin: '32px auto' }}>
         <h1 style={
          {textAlign:"center"}
         }>Islamia College Peshawar</h1>
         <button onClick={handleDrawer} style={{padding:'16px 32px', cursor:'pointer'  ,margin:'30px' ,border:'none',color:'white',background:'purple'}}>
          <i className="ri-user-add-line" style={{paddingRight:'10px'}}></i>
          New Student</button>

          <table className='crud-app'>
            <thead>
              <tr>
                <th>S/No</th>
                <th>Students Name</th>
                <th>Subject </th>
                <th>Class</th>
                <th>Roll</th>
                <th>DOB</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
             
          
            {
              students.map((item,index)=>(
                 <tr>
                <td>{index}</td>
                <td>{item.fullname}</td>
                <td>{item.subject}</td>
                <td>{item.class}</td>
                <td>{item.roll}</td>
                <td>{item.Date}</td>
            <td>
              <div>
                <button onClick={()=> editStudent(index)}  style={{cursor:'pointer',border:'none,',background:'transparent',fontSize:20}}> <i class="ri-pencil-line"></i></button>
                <button onClick={()=> deleteStudents(index)} style={{cursor:'pointer',border:'none,',background:'transparent',fontSize:20}}><i class="ri-delete-bin-5-line"></i></button>
              </div>
            </td>
              </tr>
              ))
            }
          
            
            </tbody>
          </table>

       </div>

       <aside style={{padding:'32px',position:'fixed',top:0,
        right: open,
        transition:'0.4s '

        ,background:'white',height:'100%',width:450,boxShadow:'0 0 40px rgba(0,0,0,0.2)'}}>
            
            <button style={{border:'none',background:'transparent',fontSize:'20px', position:'absolute',left:25,top:25,cursor:'pointer'}}
            onClick={closeDrawer}
            ><i class="ri-close-circle-line"></i></button>
            <h1>New Student</h1>
            <form 
            onSubmit={edit === null ? createStudent : saveStudent}
            style={{display:'flex',flexDirection:'column', gap:16,}}>
             
              <input
              value={form.fullname}
              onChange={handleInput}
              required
              name='fullname'
              style={{border:'1px solid #ccc', padding:16,borderRadius:4}}
              type="text" 
              placeholder='Enter your Full Name Here'
              />
                 <input
                 value={form.subject}
                onChange={handleInput}
              required
              name='subject'
              style={{border:'1px solid #ccc', padding:16,borderRadius:4}}
              type="text" 
              placeholder='Enter your Subject Here'
              />
              <input
              value={form.class}
              onChange={handleInput}
              required
              name='class'
              style={{border:'1px solid #ccc', padding:16,borderRadius:4}}
              type="Number" 
              placeholder='Enter your Class Here'
              />
              <input
              value={form.roll}
              onChange={handleInput}
              required
              name='roll'
              style={{border:'1px solid #ccc', padding:16,borderRadius:4}}
              type="Number" 
              placeholder='Enter your Roll Number Here'
              />
             
              
                <input
                value={form.Date}
              onChange={handleInput}
              name='Date'
              style={{border:'1px solid #ccc', padding:16,borderRadius:4}}
              type="Date" 
              
              />

{
  edit === null ? <button 
style={{border:'none',
  background:'purple',  
  color:'white',fontSize:16,
  padding:'14px 0',cursor:'pointer'}}>Submit</button> 
  :

 <button style={{border:'none',
  background:'pink',color:'white',
  fontSize:16,padding:'14px 0',cursor:'pointer'}}>Save</button>
}




              
           
            </form>
       </aside>
     </div>
    </>
  )
}

export default App
