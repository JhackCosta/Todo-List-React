// eslint-disable-next-line react/prop-types, no-unused-vars
const Filter=({filter, setFilter, setSort}) =>{
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Complete">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem de Apresentação:</p>
                    <button onClick={()=> setSort("Asc")}>Asc</button>
                    <button onClick={()=> setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    );
};


export default Filter;