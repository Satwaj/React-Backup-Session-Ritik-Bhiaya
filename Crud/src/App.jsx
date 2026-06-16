import Card from './components/Card' 
import { useState,useEffect, useRef } from 'react' 


const App = () => {

  console.log('App rendered')

  const inputRef = useRef()
  const inputRef1 = useRef()
 
  





  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [edit , setEdit] = useState(null)

const submitHandler = (e) => {
  e.preventDefault()
  console.log('Form submitted')

  if(edit !== null){
    const copy = [...data]
    copy[edit] = {title, desc}
    setData(copy)
    setEdit(null)
    setTitle('')
    setDesc('')
    return
  }
   else
    {  

  const copyArr = [...data];

  copyArr.push({ title, desc });
  setData(copyArr);

  setTitle("");
  setDesc("");}

 
}

useEffect(() => {
  
localStorage.setItem("data", JSON.stringify(data));

}, [data])


const deleteHandler = (idx)=>{
  const copyArr = [...data]
  copyArr.splice(idx,1)
  setData(copyArr)
}

  return (
    <div>
      <h1 className='text-3xl font-bold  bg-red-300 underline text-center mt-10'>Hello world!</h1>
      <form  className='w-1/2 mx-auto mt-10' onSubmit={submitHandler}>
        <input ref={inputRef} value={``} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter your name' className='w-full p-2 border border-gray-300 rounded mb-4' />
        <input ref={inputRef1}  value={``} onChange={(e) => setDesc(e.target.value)} type="text" placeholder='Enter info' className='w-full p-2 border border-gray-300 rounded mb-4' />
        <button   type='submit' className='w-full p-2 bg-blue-500 text-white rounded'>Submit</button>
      </form>


      <Card data={data} deleteHandler={deleteHandler} setTitle={setTitle} setDesc={setDesc} setEdit={setEdit} edit={edit} />

   
    </div>
  )
}

export default App
