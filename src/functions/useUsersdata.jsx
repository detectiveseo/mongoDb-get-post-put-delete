import axios from "axios";
import { useEffect, useState } from "react";




const useUserdata = () => {
  const [allData, setAllData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/users/?page=${currentPage}&items=${itemsPerPage}`)
  //     .then(data => {
  //       setAllData(data.data)
  //     })
  // }, [currentPage, itemsPerPage])

  
  const fetch = () => {
    axios.get(`http://localhost:3000/users/?page=${currentPage}&items=${itemsPerPage}`)
      .then(data => {
        setAllData(data.data)
      })

      return
  }

  useEffect(() => {
    fetch();
  }, [currentPage, itemsPerPage])

  return {
    allData,
    setAllData,
    currentPage,
    setcurrentPage,
    itemsPerPage,
    setItemsPerPage,
    fetch
  }

}


export default useUserdata


