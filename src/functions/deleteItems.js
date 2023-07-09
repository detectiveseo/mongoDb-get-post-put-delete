import axios from "axios";
import Swal from "sweetalert2";

export const deleteItems = (x, userData) => {
  console.log(userData);
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
              fetch()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }})
      }
    })
  }