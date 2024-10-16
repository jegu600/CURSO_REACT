import PropTypes from "prop-types";


const FirtsApp = ( { title, subtitle } ) => {

    return (
        <>
            <h1>{ title }</h1>
            <h2>{ subtitle } </h2>
        </>
    )

};

FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirtsApp.defaultProps = {
    title: 'No tiene titulo',
    subtitle: 'No tiene subtitulo'
}


export default  FirtsApp ;

