// TodoItem.js
import React from 'react';

function TodoItem({ task, deleteTask }) {
  return (
    <li>
      {task}
      <button className='delete' onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TodoItem;
