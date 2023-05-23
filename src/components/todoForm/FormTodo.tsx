import {useState} from 'react'

type prop = {
  onAdd: (text:string,category:string) => void
}

export const FormTodo = ({onAdd}:prop) =>{
    const [text,setText] = useState('')
    const [category,setCategory] = useState('')
    const handleTodo = (e: React.FormEvent) =>{
       e.preventDefault();
       if(!text || !category) return;
       onAdd(text,category)
       setText('')
       setCategory('')
    }
    return(
        <div className="my-6">
            <h2 className="text-center text-2xl mb-3">Criar Tarefa:</h2>
            <form onSubmit={handleTodo}>
                    <input className="w-full my-3 py-1 px-2 " placeholder="Digite sua tarefa" type="text"
                    value={text}
                    onChange={e=> setText(e.target.value)}
                    />
                    <select className="w-full mb-6 p-1" value={category} onChange={e=> setCategory(e.target.value)}>
                        <option value="">Selecione a categoria</option>
                        <option value="trabalho">Trabalho</option>
                        <option value="estudo">Estudo</option>
                        <option value="pessoal">Pessoal</option>
                    </select>
                    <button className="w-full bg-green-800 py-1 rounded text-white mb-6">Cadastar</button>

            </form>
        </div>
    )
}