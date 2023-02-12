
import { useContext } from 'react';
import { TodoAdd } from '../components/TodoAdd';
import { TodoList } from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';
import { UserContext } from '../useContext/context/UserContext';




export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();
    const { user } = useContext( UserContext);
    
  return (
    <>
        <div className='d-flex justify-content-between mt-5'>
            <h1>Bienvenido { user.name }</h1>
            <h2 className='pt-2'>TodoApp: {todosCount}, <small>pendientes: { pendingTodosCount }</small></h2>
        
        </div>    
        <hr />


        <div className='row'>
            <div className="col-5">
                
            <h4>Agregar TODO</h4>
            <hr />
            
            <TodoAdd onNewTodo={ handleNewTodo}/>
                
            </div>
            <div className='col-7'>
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }
                />
            </div>
        </div>
    </>
  )
}
