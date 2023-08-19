// eslint-disable-next-line react/prop-types
const Filter=({filter, setFilter}) =>{
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
                    <button>Crescente</button>
                    <button>Decrescente</button>
                </div>


            </div>

        </div>
    );
};


export default Filter;