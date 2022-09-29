import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Oscar',
        email: 'nava@gmail.com'
    }

    test('debe de regresar los valores por defectos', () => { 

        const { result } = renderHook( () => useForm(initialForm) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function),
        })

    });

    test('debe de cambiar el nombre del formulario', () => {
        
        

        /**
         * TAREA 
         * 
         * montar el hook
         * onInputChange() //act, event...
         * 
         * expect, result.current.name = Juan
         * expect, result.current.formState.name === Juan
         */
        
        const{ result } = renderHook( () => useForm(initialForm));
        const{ onInputChange, onResetForm} = result.current;

        act( () => {
            onInputChange({target: {name:'name', value:'Juan'}});
            onResetForm(initialForm);
        })

        expect(result.current.name).toEqual(initialForm.name);
        expect( result.current.formState.name).toEqual(initialForm.name);
    });
});