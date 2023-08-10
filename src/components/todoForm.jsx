import React from "react";
const TodoForm =()=>{
    return <div className="todo-form"> 
        <h2>Criar tarefa:</h2>
        <form>
            <input type="text" placeholder="Digite a tarefa"/>
            <select>
                <option value="">Selecione a categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Despesas">Despesas</option>
                <option value="Pagar">Pagar</option>
                <option value="Compromisso">Compromisso</option>
            </select>
            <button type="submit"> Salvar Tarefa</button>
        </form>
    </div>
}


export default TodoForm;