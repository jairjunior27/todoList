
type prop ={
    filter: string
    setFilter: (e: string) => void
    setSort: (e: string) => void
}

export const Filtrar = ({filter,setFilter,setSort}:prop) =>{
    return(
        <div>
            <h2 className="text-center text-2xl mb-3">Filtrar</h2>
            <div className="filterOption flex items-center mb-8">
                <div className="flex-1">
                    <p className="text-md">Status:</p>
                    <select className="w-full p-1 rounded " value={filter} onChange={e => setFilter(e.target.value)}>
                        
                        <option value="All">Todos</option>
                        <option value="completed">Completos</option>
                        <option value="Incompleted">Incompletos</option>
                    </select>
                </div>
                <div className="flex-1 mx-6">
                    <button className="bg-blue-800 text-white font-bold py-1 px-2 rounded "   onClick={()=>setSort('Asc')}>Asc</button>
                    <button className="bg-blue-800 text-white font-bold py-1 px-2 rounded mx-2"   onClick={()=>setSort('Des')}>Des</button>
                </div>
            </div>

        </div>
    )
}