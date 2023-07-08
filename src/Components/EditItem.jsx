import React from 'react';

const EditItem = ({editFormData ,setEditForm}) => {

    const {name, email, proffesion} = editFormData;
    return (
        <div className='p-10 border bg-gray-700 rounded-lg sticky top-0 shadow-2xl shadow-lime-400 text-white'>
            <h2 className='text-3xl uppercase mb-10'>Send data to mongodb</h2>
            <form
                className='flex flex-col gap-4'>
                <input
                    type="text"
                    placeholder="Type here"
                    name='name'
                    defaultValue={name}
                    className="input input-bordered input-success w-full" />

                <input
                    type="text"
                    placeholder="Type here"
                    name='email'
                    defaultValue={email}
                    className="input input-bordered input-success w-full" />

                <input
                    type="text"
                    placeholder="Type here"
                    name='proffesion'
                    defaultValue={proffesion}
                    className="input input-bordered input-success w-full" />
                <input type="submit" value="submit" className='btn btn-outline w-full bg-green-300 text-black shadow-green-400 shadow-inner' />
            </form>
            <div 
            onClick={() =>  setEditForm(true)}
            className=' absolute btn btn-outline -top-4 -right-4 bg-slate-400 text-white'>X</div>
        </div>
    );
};

export default EditItem;