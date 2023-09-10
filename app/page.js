'use client'
import React, { useState } from 'react'

const page = () => {
  const [title,setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e)=>{
    console.log("submitHandler");
    e.preventDefault();//it cancels the event if it is cancellable, here it stops the form from submitting
    setMainTask([...mainTask, {title, desc}])
    setTitle('');
    setDesc('');
    console.log(mainTask);
  };

  const deleteHandler = (i) =>{
    console.log("deleted");
    let copyTask = [...mainTask]
    copyTask.splice(i, 1);
    setMainTask(copyTask)

  }

  let renderTask = <h2>No Task Available!</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((task, i)=>{
      return( 
      <li key={i} className='flex border-b-2 items-center justify-center'>
        <div className='flex items-center justify-evenly w-2/3'>
            <h5 className='text-2xl font-semibold'>{task.title}</h5>
            <h6 className='text-xl font-semibold'>{task.desc}</h6>
        </div>
        <button
          onClick={()=>{
            deleteHandler(i)
          }}
          className="bg-blue-600 text-white text-l m-5 px-1 py-1 font-bold rounded">Delete
        </button>
      </li>
    );
  });
  }
  return (
    <>
    <h1 className='bg-blue-600 text-white p-5 text-2xl font-bold text-center'>
      Yash Khadikar | Projects
    </h1>
    <form onSubmit={submitHandler}>
      <input 
      placeholder='Enter title here'
      type="text" 
      className='text-xl border-zinc-800 border-2 m-5 p-1'
      value={title}
      onChange={(e)=>{
        // console.log(e.target.value);
        setTitle(e.target.value)
      }}
      />
      <input 
      placeholder='Enter description here'
      type="text" 
      className='text-xl border-zinc-800 border-2 m-5 p-1'
      value = {desc}
      onChange={(e)=>{
        setDesc(e.target.value);
      }}
      />
      <button className="bg-blue-600 text-white text-xl m-5 px-2 py-2 font-bold rounded">Add task</button>
    </form>
    <hr/>
    <div className='p-8 bg-blue-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
