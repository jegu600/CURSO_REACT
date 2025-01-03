import { NavLink, replace, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', { replace: true });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive }: '' `}
                        to="/"
                    >
                        INICIO
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive }: '' `}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive }: '' `} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive }: '' `} 
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary '>
                        Usuario
                    </span>
                    <button
                        className='nav-item nav-link  btn btn-outline-danger'
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}