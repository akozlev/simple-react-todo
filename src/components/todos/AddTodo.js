import React from 'react'
import { useState } from 'react'


function AddTodo({onAddTodo}) {
    const [title, setTitle] = useState('');

    const handleChange = e => setTitle(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        onAddTodo(title);
        setTitle('');
    }

    return (
        <form
            onSubmit={onSubmit}
            style={{ display: 'flex' }}>
            <input
                type='text'
                name='title'
                style={{ flex: '10', padding: '5px' }}
                placeholder='Add Todo ..'
                value={title}
                onChange={handleChange}
            />
            <input
                type='submit'
                value='submit'
                className='btn'
                style={{ flex: '1' }}
            />
        </form>
    )
}

export default AddTodo
