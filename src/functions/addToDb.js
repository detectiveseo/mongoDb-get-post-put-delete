import axios from "axios";

const addToDb = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageField = form.image;

    console.log(imageField.files);

    //for image optimize
    const formData = new FormData();
    formData.append('image', imageField.files[0]);

    fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEDB}`, {
        method: "POST",
        body: formData
    }).then(res => res.json())
        .then(data => 
            
            axios.post("http://localhost:3000/post", {
            name: form.name.value,
            email: form.email.value,
            proffesion: form.proffesion.value,
            image: data.data.display_url,
        }).then((res) => console.log(res)).catch(err => console.log(err))

        )
        .catch(err => console.log(err))


}


export default addToDb;