import {useEffect, useState} from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
  
  const[formState, setFormState] = useState({
    username: 'strider',
    email: 'oscarnavarroaviles@gmail.com'
  })  

  const {username, email} = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ]: value
    })
  }

  useEffect(() => {
    //console.log('useEffect callet!');
  }, []);
 
  useEffect(() => {
    //console.log('formState changed!');
  }, [formState]);
  
  useEffect(() => {
    //console.log('email changed!');
  }, [email]);

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="User Name"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        <input
            type="email"
            className="form-control mt-2"
            placeholder="oscarnavarroaviles@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        {
          ( username === 'strider2' ) && <Message/> 
        }
    </>
  )
}
