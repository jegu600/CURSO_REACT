import { useState } from "react";
import PropTypes from "prop-types"



const CounterApp= ({value}) => {
    
    const [ counter, setCounter ] = useState( value );
        
    const onClickSumar = () => {
        setCounter( counter + 1 );
    };

    const onClickRestar = () => {
        setCounter( counter - 1 );
    };

    const onClickLimpiar = () => {
        setCounter( value );
    };
    
  
    return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter }</h2>

        <button onClick={ onClickSumar }> +1 </button>
        <button onClick={ onClickRestar }> -1 </button>
        <button onClick={ onClickLimpiar }> Reset </button>

    </>
  );
}

CounterApp.propTypes ={
    value : PropTypes.number.isRequired
} 


export default CounterApp;