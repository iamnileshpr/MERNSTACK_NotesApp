import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import axios from 'axios'

function Home() {
  const[notes,SetNotes]=useState(null)

    async function getAllNotes(){
       let res=await axios.get("http://localhost:3000/api/note")
       console.log(res.data.notes);
       SetNotes(res.data.notes)
    }
    useEffect(function(){
        getAllNotes();
    },[])

  return (
    <div className='bg-zinc-200 min-h-screen max-w-6xl mx-auto'>
      <Navbar/>
      <h1 className='my-4 text-3xl text-blue-600 font-bold tracking-tighter'>Notes</h1>
      <div className='grid grid-cols-3 gap-5'>
        {
          notes && notes.map(function(note,idx){
            return <Cards key={idx} data={note}/>
          })
        }
      </div>
    </div>  
  )
}

export default Home