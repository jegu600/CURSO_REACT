import React from 'react';


const TarjetaInformacion = ( {name, id, img=[] } ) => {
    return (
        <>
            <div className="card m-4" >
                <div className="card-body">
                    {
                        img.map( img =>(
                            <img key={img} src={img} alt={name}  />
                        ))
                    }
                    <h5 className="card-title">{name} -- {id}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}
export default TarjetaInformacion;