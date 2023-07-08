const addToDb = (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
        name: form.name.value,
        email: form.email.value,
        proffesion: form.proffesion.value,
    }
    console.log(data);

}

export default addToDb;