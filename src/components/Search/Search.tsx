type prop={
 search: string,
 setSearch: (e: string) => void
}

export default function Search({search,setSearch}:prop) {
    console.log(search);
  return (
    <div className="w-full">
        <h2 className="text-md">Pesquisar:</h2>
        <input className="w-full p-1 rounded px-2 mb-6" type="text" 
        value={search}
        placeholder="Digite pra pesquisar"
        onChange={e=> setSearch(e.target.value)}
        />
    </div>
  )
}
