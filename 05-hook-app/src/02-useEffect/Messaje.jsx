import { useEffect } from "react";

const Messaje = (  ) => {
    
    useEffect(() => {
      
       window.addEventListener('mousemove', ()=>{
        console.log(event)

       })
       
        return () => {
            console.log('hola')
        }
    }, [])
    
    return (
        <>
        <h3>usuriao ya existe </h3>  
        </>
    );
}
export default Messaje;