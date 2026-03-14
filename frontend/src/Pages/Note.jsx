import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Note() {
  let params=useParams()
  let navigate=useNavigate()
  let [note,setNote]=useState(null)

  async function getNote(){
    let res=await axios.get(`http://localhost:3000/api/note/${params.id}`)
    console.log(res);
    setNote(res.data.note)
  }

  async function DeleteNote(){
    let res=await axios.delete(`http://localhost:3000/api/note/${params.id}`)
    console.log(res);
    setNote(res.data.note)
    navigate('/')
  }

  useEffect(function(){
    getNote()
  },[])

  return note && (
    <div className='w-6xl mx-auto tracking-tighter'>
      <Navbar/>
      <Link to={'/'} className='bg-blue-500 px-4 py-2 rounded-lg my-6 block text-white w-fit'>Back</Link>
      <h1 className=''>Notes Data -{params.id}</h1>
      <h1 className='text-4xl font-semibold tracking-tighter my-4'>{note.tittle}</h1>
      <p className='text-3xl'>{note.content}</p>
      <div className='flex items-center gap-5 my-5 '>
      <button onClick={()=>navigate(`/edit/${note._id}`, {state: note})} className='bg-orange-400 px-4 py-2 rounded-lg my-6 block text-white w-fit'>Edit</button>
      <button onClick={DeleteNote} className='bg-red-500 px-4 py-2 rounded-lg my-6 block text-white w-fit'>Delete</button>
      </div>
    </div>
  )
}

export default Note
