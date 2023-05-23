import { todoItemProp } from "../../data/TodoItem"

type prop ={
    item: todoItemProp
    onAdd: (id: number) => void
    onComplete: (id: number) => void
   
}

export default function TodoList({item,onAdd,onComplete}:prop) {
  return (
    <div  className="todo flex justify-between items-center bg-zinc-700 mb-3 py-3 rounded-md text-white max-sm:flex-col" style={{textDecoration: item.isCompleted ? 'line-through' : ''}}>
    
     <div className="headerTodo p-2  flex-1 ">
       <p className="font-bold text-xl">{item.text}</p>
       <p className="font-bold text-zinc-400">{item.category}</p>
     </div>
     <div className="">
     <button className='bg-green-700 mr-4 p-1 rounded font-bold max-sm:' onClick={()=> onComplete(item.id)}>{item.isCompleted ? 'Desmarcar' : 'Completar'}</button>
     <button className='bg-red-700 py-1 px-2 rounded mr-4 font-bold' onClick={()=>onAdd(item.id)} >X</button>
     </div>
    
    
    </div>
  )
}
