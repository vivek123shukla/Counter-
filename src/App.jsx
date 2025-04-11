import React from 'react'
import { useState } from 'react'

export default function App() {
  const [count,setcount]=useState(0);
  const inc=()=>setcount(count+1);
  const dec=()=>setcount(count-1);
  const res=()=>setcount(0);

  return (
    <div className=' ml-86 mt-22 w-[40%]  h-90 border bg-gray-500 rounded-3xl'>
      <h1 className=' text-3xl mt-5 text-yellow-400'>COUNTER APP BY VIVEK SHUKLA</h1>
      <h1 className=' mt-6 text-6xl'>{count}</h1>
      <div className=' mt-32  '>
       <button 
       onClick={inc}
       className=' border p-2
        rounded-2xl text-2xl cursor-pointer text-white bg-green-900'>Increment</button>
       <button 
       onClick={dec}
       className=' border p-2
        rounded-2xl text-2xl ml-4 text-white cursor-pointer bg-red-900'>Decrement</button>
        <button
        onClick={res}
        className='  border p-2
        rounded-2xl text-2xl ml-4 text-black cursor-pointer bg-yellow-500'>Reset</button>
        </div>
    </div>
  )
}
