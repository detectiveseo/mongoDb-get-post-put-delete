import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import addToDb from './functions/addToDb'
import axios from 'axios'
import EditItem from './Components/EditItem'
import Swal from 'sweetalert2'

function App() {

  const [editForm, setEditForm] = useState(true);
  const [editFormData, setEditFormData] = useState({})


  let [allData, setAllData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then(data => setAllData(data.data))
  }, [addToDb])


  const deleteItems = (x) => {
    const id = x._id;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.isConfirmed) {

        axios.delete(`http://localhost:3000/remove/${id}`)
          .then((res) => {
            if(res?.data?.ok == true){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }})
      }
    })
  }


  const editItems = (x) => {
    setEditFormData(x);
    const id = x._id;
    // <TODO></TODO>
    setEditForm(false);
    return x;
  }
  return (
    <>
      <div className='grid grid-cols-2 gap-4 relative'>

        <div className='p-10 border rounded-lg sticky h-[95vh] top-0 shadow-2xl shadow-lime-400 text-white'>
          <h2 className='text-3xl uppercase mb-10'>Send data to mongodb</h2>
          <form
            onSubmit={addToDb}
            className='flex flex-col gap-4'>
            <input
              type="text"
              placeholder="Type here"
              name='name'
              defaultValue="Imran"
              className="input input-bordered input-success w-full" />

            <input
              type="text"
              placeholder="Type here"
              name='email'
              defaultValue="imboy8585@gmail.com"
              className="input input-bordered input-success w-full" />

            <input
              type="text"
              placeholder="Type here"
              name='proffesion'
              defaultValue="freeluncer"
              className="input input-bordered input-success w-full" />
            <input type="submit" value="submit" className='btn btn-outline w-full bg-green-300 text-black shadow-green-400 shadow-inner' />
          </form>
        </div>

        <div className='grid grid-cols-2 gap-5 justify-start items-center'>
          {
            allData.map((x, i) => {
              return (
                <div key={i} className='border flex-col h-56 flex justify-center items-center relative'>
                  <h2 className='text-3xl text-white'>{x?.name}</h2>
                  <h2 className='text-1xl text-white'>{x?.email}</h2>

                  <div
                    onClick={() => deleteItems(x)}
                    className='btn btn-outline bg-red-700 p-3 absolute -top-5 -right-5 rounded-full text-white px-5'>X</div>
                  <div
                    onClick={() => editItems(x)}
                    className='bg-red-600 absolute bottom-0 left-0 p-3 text-white px-5'>Edit</div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className={` fixed w-full left-0 h-[100vh] top-0 bg-gray-700 ${editForm ? "hidden" : "block"} `}>
        <div className='w-4/12 mx-auto flex flex-col justify-center h-[100vh]'>
          <EditItem editFormData={editFormData} setEditForm={setEditForm} />
        </div>
      </div>
    </>
  )
}

export default App
