import { useEffect, useState } from "react";
import Messaje from "./Messaje";


const SimpleForm = ( Argumento ) => {
   
    const [formState, setFormState] = useState({
        userName:'strider',
        email:'email@correo.com'
    })

    const { userName, email }= formState;

    const onInputChance = ({target})=>{
        const { name, value} = target;
        setFormState({
            ...formState,
            [ name]: value
        });

    } 
    
    useEffect( ()=> {
        // console.log('Use Effect activado');
    } , [] );

    useEffect( ()=> {
        // console.log('formState activado');
    } , [ formState ] );

    useEffect( ()=> {
        // console.log('email activado');
    } , [ email ] );


    return (
        <>
        <h1> FORMULARIO SIMPLE</h1>
        <hr />

        <input 
            type="text"
            className="form-control mt-2"
            placeholder="User name"
            name="userName" 
            value={userName} 
            onChange={onInputChance}  
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="email@correo.com"
            name="email"  
            value={email} 
            onChange={onInputChance}
        />  

        { (userName === 'strider2') && <Messaje/> }    
        
        </>
    );
}
export default SimpleForm;