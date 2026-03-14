import React from 'react'
    import Navbar from '../Components/Navbar'
    import { useForm } from "react-hook-form"
    import axios from 'axios'
    import { useLocation, useNavigate } from 'react-router-dom'

    function Edit() {
    const {handleSubmit,register}=useForm()
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location.state._id);

    async function handleData(data){
        console.log(data);
        let res = await axios.put(`http://localhost:3000/api/note/${location.state._id}`,data)
        console.log(res);
        navigate(`/edit/${note._id}`, { state: note })
    }

    return (
        <div className='bg-zinc-200 min-h-screen max-w-6xl mx-auto'>
        <Navbar/>
        <form onSubmit={handleSubmit(handleData)} className='flex flex-col gap-4 w-lg mx-auto my-2'>
        <h1 className='tracking-tighter font-semibold text-xl'>Edit a note</h1>
            <div className='flex flex-col gap-2'>
            <label htmlFor="title">Title</label>
            <input 
            {...register('tittle')}
            className='border border-zinc-700 px-4 py-2 rounded-xl text-sm' type="text" 
            placeholder='Enter Title' 
            id='title' 
            value={location.state.tittle}/>
            </div>
            <div className='flex flex-col gap-2'>
            <label htmlFor="content">Content</label>
            <input 
            {...register('content')}
            className='border border-zinc-700 px-4 py-2 rounded-xl text-sm' type="textarea" placeholder='Enter content' id='content' git add README.md
           Value={location.state.content}  />
            </div>
            <button className='bg-blue-500 w-fit px-4 py-2 text-white rounded-lg text-xs font-semibold my-2'>Submit</button>
        </form>
        </div>
    )
    }

    export default Edit
 