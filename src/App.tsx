import {useState} from 'react'
import { TodoItem } from './data/TodoItem'
import TodoList from './components/TodoList/TodoList'
import { FormTodo } from './components/todoForm/FormTodo'
import Search from './components/Search/Search'
import { Filtrar } from './components/Filtrar/Filtrar'




const App = () =>{
 

  
  const [todo,setTodo] = useState(TodoItem)
  const [search,setSearch] = useState('')
  const [filter,setFilter] = useState('')
  const [sort,setSort] = useState('Asc')

 

  const addTodo = (text:string,category:string) =>{
    const newTodo = [...todo,{
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,

      
    }]
 
    setTodo(newTodo)
  
    
  }
  const completed = (id: number) =>{
   const newTodo = [...todo]
   newTodo.map((item)=> item.id === id ? item.isCompleted = !item.isCompleted : todo)
   setTodo(newTodo)
  }

  const closeTodo = (id:number) =>{
   
    const newTodo = [...todo]
    const filter = newTodo.filter((item )=> item.id !== id ? todo : null)
   
     setTodo(filter)
  }

  return(
    <div className="contTodo max-w-lg bg-zinc-200 px-6 rounded m-auto  my-8">
      <h1 className="p-6 text-3xl font-semibold text-center ">Lista Tarefa</h1>
      
      <Search search={search} setSearch={setSearch}/>
      <Filtrar filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todoList   ">
       
      
        {todo.filter((item)=> filter === 'All' ? true : filter === 'completed' ? item.isCompleted : !item.isCompleted)
        .filter((item)=> item.text.toLowerCase().includes(search.toLowerCase())).sort((a,b)=> sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((item,index)=>(
        <TodoList key={index} item={item} onAdd={closeTodo} onComplete={completed}/>
        
        ))}
       
         
      </div>
    
      <FormTodo onAdd={addTodo}/>
    </div>
  )
}

export default App;