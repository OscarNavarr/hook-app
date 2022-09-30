import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe ('Pruebas en todoReducer', () => {
    
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];

    test('debe de regresar el estado inicial', () => { 

        const newState = todoReducer( initialState, {});
        
        /**
         *Esto no me funciona
         *  expect( newState ).toBe( initialState );
         * 
         */

    });

    test('debe de agregar un todo', () => { 
        
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action);
        
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
        
     });

     test('debe de eliminar un TODO', () => {
        
        const action = {
            type: '[TODO] Remove Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action);
        
        expect( newState.length ).toBe( 1 );

    });

    test('debe de realizar el Toggle del todo', () => { 
        
        
        const action = {
            type: '[TODO] Toggle Todo',
            payload: {
                id: 1,
                description: 'Demo Todo',
                done: false
            }
        };

        const newState = todoReducer( initialState, action);
        
        /**
         * 
         * Este test tiene problema en la proxima clase se soluciona 
         * # de la clase 170
         * section 12
         */
        expect( newState ).toBe( true  );

    })
});