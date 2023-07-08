import axios from "axios";

const addToDb = (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
        name: form.name.value,
        email: form.email.value,
        proffesion: form.proffesion.value,
    }

    axios.post("http://localhost:3000/post", {
        name: form.name.value,
        email: form.email.value,
        proffesion: form.proffesion.value,
    })
        .then(d => console.log(d))


}


export default addToDb;