import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

function Todos({ todos, onHandleDelete, onHandleComplete }) {
    
    // console.log(todos[0].title)
    return Object.keys(todos).map(key =>
        <TodoItem todo={todos[key]} key={key} index={key} onHandleDelete={onHandleDelete} onHandleComplete={onHandleComplete} />
    );
}


// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
