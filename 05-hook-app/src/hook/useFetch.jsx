import { useEffect, useState } from 'react';

const  useFetch = ( url ) => {


    const [estado, setEstado] = useState({
        data: null,
        estaCargado:true,
        tieneError: false,
        mensajeError:null
    })

    useEffect(() => {
        peticionHTTP();  
    }, [url]);

    const cargandoEstado = () => {
        setEstado({
            data: null,
            estaCargado:true,
            tieneError: false,
            mensajeError:null 
        });
    };


    const peticionHTTP = async() => {
        cargandoEstado();
        const  respuesta = await fetch(url);
        
        await new Promise( resolve => setTimeout( resolve,700) );
        
        if ( !respuesta.ok ) {
            setEstado({
                data: null,
                estaCargado:false,
                tieneError: true,
                mensajeError:{
                    code:respuesta.status,
                    mensaje:respuesta.statusText,
                }
            });
            return;
        }

        const data = await respuesta.json();

        setEstado({
            data: data,
            estaCargado:false,
            tieneError: true,
            mensajeError:null,
        });

    };


   
    return {
        data: estado.data,
        estaCargado: estado.estaCargado,
        tieneError: estado.tieneError,
    };
}
export default useFetch;