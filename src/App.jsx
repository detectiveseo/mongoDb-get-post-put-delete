import { useEffect, useRef, useState } from 'react'
import './App.css'
import addToDb from './functions/addToDb'
import axios from 'axios'
import EditItem from './Components/EditItem'
import { deleteItems } from './functions/deleteItems'
import { useTotalItems } from './functions/useTotalItems'

function App() {

  const [editForm, setEditForm] = useState(true);
  const [editFormData, setEditFormData] = useState({})
  const [allData, setAllData] = useState([]);
  const [cureentPage, setCureentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6)


  useEffect(() => {
    axios.get("http://localhost:3000/users").then(data => {
      setAllData(data.data);
    });
  }, []);


  const editItems = (x) => {
    setEditFormData(x);
    setEditForm(false);
  }

  const totalItems = useTotalItems();

  const optionForPerpage = useRef();
  const handlePerPage =() => {
    setItemsPerPage(optionForPerpage.current.value);
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const loopPages = [];
  for(let i = 0; i < totalPages; i++){
    loopPages.push(i+1)
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


        <div>
          <div className='grid grid-cols-2 gap-5 justify-start items-center'>
            {
              allData?.map((x, i) => {
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
          
          <div className="join mt-6">
            {
              loopPages?.map((number) => <button 
              key={number} 
              onClick={() => setCureentPage(number)}
              className=" join-item btn btn-lg bg-green-500 text-black hover:text-white">{number}</button>)
            }
          </div>
            <div>
              <span>Item's per page  </span>
              <select className='p-1' ref={optionForPerpage} onChange={handlePerPage}>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6" selected>6</option>
              </select>
            <span>current page is {cureentPage} of total items {totalItems}</span>
            </div>

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
