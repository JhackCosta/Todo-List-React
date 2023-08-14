/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState} from "react";

const TodoForm =({addTodo})=>{

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");

    }
    return <div className="todo-form"> 
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite a tarefa" 
            value={value}
            onChange = {(e) => setValue(e.target.value)}
            />
            <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Selecione a categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Despesas">Despesas</option>
                <option value="Pagar">Pagar</option>
                <option value="Compromisso">Compromisso</option>
            </select>
            <button type="submit"> Adicionar Tarefa</button>
        </form>
    </div>
}
export default TodoForm;