import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import addToDb from './functions/addToDb'

function App() {

  return (
    <>
      <div className='p-10 border rounded-lg shadow-2xl shadow-lime-400 text-white'>
        <h2 className='text-3xl uppercase mb-10'>Send data to mongodb</h2>
        <form
        onSubmit={addToDb}
        className='flex flex-col gap-4'>
          <input 
          type="text" 
          placeholder="Type here" 
          name='name'
          value="Imran"
          className="input input-bordered input-success w-full" />

          <input 
          type="text" 
          placeholder="Type here" 
          name='email'
          value="imboy8585@gmail.com"
          className="input input-bordered input-success w-full" />

          <input 
          type="text" 
          placeholder="Type here"
          name='proffesion'
          value="freeluncer"
          className="input input-bordered input-success w-full" />
          <input type="submit" value="submit" className='btn btn-outline w-full bg-green-300 text-black shadow-green-400 shadow-inner' />
        </form>
      </div>
    </>
  )
}

export default App
