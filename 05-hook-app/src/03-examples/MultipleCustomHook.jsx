import useCounter from "../hook/useCounter";
import useFetch from "../hook/useFetch";
import MenjaseCargando from "./MensajeCargando";
import TarjetaInformacion from "./TarjetaInformacion";

const MultipleCustomHook = (  ) => {
    const { counter, sumar, restar} = useCounter(3);
    const { data, estaCargado, tieneError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    return (
        <>
            <h1>INFORMACION DE POKEMONES</h1>
            
            <hr />
            {console.log(data)}
            { estaCargado ? <MenjaseCargando/> 
                : <TarjetaInformacion 
                    name={data.name}
                    id={counter} 
                    img={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}
            />}
            
            <button 
                className="btn btn-primary"
                onClick={ () => counter > 1 ? restar():null }
            > Anterior </button>
            
            <button 
                className="btn btn-success m-2"
                onClick={ () => sumar() }
            >Siguiente</button>

        </>
    );
}

export default MultipleCustomHook;