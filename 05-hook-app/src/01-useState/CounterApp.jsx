import { useState } from "react";



const CounterApp = (  ) => {
    
    const [ valorIni , setCounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30
    })
    
    const {counter1, counter2, counter3} = valorIni;

    return (
        <>

            <h1>Counter: { counter1 }</h1>
            <h1>Counter: { counter2 }</h1>
            <h1>Counter: { counter3 }</h1>
            <br />
            <button 
                className="btn btn-warning"
                onClick={ () => setCounter (
                    {   ...valorIni, 
                        counter1: counter1 + 5, 
                        counter2: counter2 + 1  }
                    
                )}
            >+1</button>
        </>
    );
}
export default CounterApp;