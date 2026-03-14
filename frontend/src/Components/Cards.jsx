import React from 'react'
import { Link } from 'react-router-dom'
function Cards({data}) {
  return (
    <div className='bg-white p-4  rounded-xl tracking-tighter'>
      <h1 className='font-semibold text-lg '>{data.tittle}</h1>
      <Link to={`/note/${data._id}`} className='bg-blue-500  text-white rounded-lg my-2 block font-semibold px-4 py-2'>View Note</Link>
    </div>
  )
}

export default Cards
