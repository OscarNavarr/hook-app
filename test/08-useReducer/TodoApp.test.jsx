import { render, screen } from "@testing-library/react";
import { useTodos } from "../../src/hooks/useTodos";
import { TodoApp } from "../../src/useReducer/TodoApp";

jest.mock('../../src/hooks/useTodos.js');

describe('Pruebas en <TodoApp />', () => { 
        useTodos.mockReturnValue({
            todos:[
                { id:1, description: 'Todo #1', done: false },
                { id:2, description: 'Todo #2', done: true }
            ],
            todosCount: 2,
            pendingTodosCount: 1,
            handleDeleteTodo: jest.fn(),
            handleToggleTodo: jest.fn(),
            handleNewTodo: jest.fn()
        });

        test('debe de mostrar el componente correctamente', () => {

            render( <TodoApp /> );
            screen.debug();
        })

})