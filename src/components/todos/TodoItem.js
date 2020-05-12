import React from 'react'
import PropTypes from 'prop-types'


function TodoItem({ todo, index, onHandleDelete, onHandleComplete }) {
    const getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: todo.completed ?
                'line-through' : 'none'
        }
    }

    return (
        <div style={getStyle()}>

            <p>
                <input type='checkbox' checked={todo.completed} onChange={onHandleComplete.bind(this, index)} /> {' '}
                {todo.title}
                <button onClick={onHandleDelete.bind(this, index)} style={btnStyle}>X</button>
            </p>

        </div>
    )
}



// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#af3000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;