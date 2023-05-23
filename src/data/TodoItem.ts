
export type todoItemProp ={
    id: number
    text: string
    category: string
    isCompleted: boolean
}

export const TodoItem: todoItemProp[] = [
    {id: 1,text:'Criar Video', category: 'Trabalho',isCompleted:false},
    {id: 2,text:'Estudar react', category: 'Estudo',isCompleted:false},
    {id: 3,text:'Ir pra academia', category: 'Pessoal',isCompleted:false},
]