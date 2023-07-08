import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import addToDb from './functions/addToDb'
import axios from 'axios'

function App() {
  let [allData, setAllData] = useState([]);
  useState(() => {
    axios.get("http://localhost:3000/users").then(data => setAllData(data.data))
  }, [addToDb])


  const deleteItems = (x) =>{
    const id = x._id;
    axios.delete(`http://localhost:3000/remove/${id}`)
    .then(res => console.log(res))
  }
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

      <div className='grid grid-cols-3 gap-5 justify-start items-center'>
        {
          allData.map((x, i) => {
            return (
              <div key={i} className='border flex-col h-48 flex justify-center items-center relative'>
                <h2 className='text-3xl text-white'>{x?.name}</h2>
                <h2 className='text-1xl text-white'>{x?.email}</h2>
                <div 
                onClick={() => deleteItems(x)}
                className='bg-red-600 absolute bottom-2 p-3 rounded-full text-white px-5'>X</div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
