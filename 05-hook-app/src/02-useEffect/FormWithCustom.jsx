import { useEffect, useState } from "react";
import Messaje from "./Messaje";
import useForm from "../hook/useForm";


const FormWithCustom = () => {
   
    const { formState, onInputChance, onResetForm } =useForm({
        userName: '',
        email:'',
        password: ''
    });

    const { userName, email, password } = formState;


   
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
            <h1> FORMULARIO *- CON HUSTON HOOK</h1>
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

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"  
                value={password} 
                onChange={onInputChance}
            />  
            
            <button onClick={onResetForm} className="btn btn-warning mt-3"> RESET </button>
        
        </>
    );
}
export default FormWithCustom;