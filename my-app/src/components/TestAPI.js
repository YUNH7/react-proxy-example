import React, { useState } from 'react'

export function TestAPI() {
  const [data, setData] = useState([])
  const [todo, setTodo] = useState({})
  const getTodos = () => {
    return fetch('/api2/todos')
      .then(res => res.json())
      .then(val => setData(val))
  }
  const postTodo = () => {
    return fetch('/api2/todo', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo })
    })
      .then(res => res.json())
  }

  const newTodo = (e) => {
    if (e.target.name === 'todo') {
      setTodo({...todo, todo: e.target.value})
    } else {
      setTodo({...todo, category: e.target.value})
    }
  }


  return (
    <div>
      {data.map(el => el.todo)}
      <button onClick={getTodos}>투두 조회</button>
      <input type='text' placeholder='todo' name='todo' onChange={newTodo}></input>
      <input type='text' placeholder='category' name='category' onChange={newTodo}></input>
      <button onClick={postTodo}>투두 추가</button>

    </div>
  )
}