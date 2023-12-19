import { Link, BrowserRouter } from 'react-router-dom'
export  const ComponentHeaderLogin = () => {
     return (

        <BrowserRouter>
    <header className="header">
        <div>
            <img className="logo" src="../public/logo.svg" alt="" />
        </div>
        <nav className="navbar">
            <ul>
                <li>Inicio</li>
                <li>nosotros</li>
                <li>casas</li>
                <li>contactanos</li>
            </ul>


            <div className="login">
                <img className="logo--login" src="../public/person.svg" alt="" />
                <p>Logeate
                <Link to='./'></Link>
                </p>
            </div>
        </nav>
    </header>

    </BrowserRouter>
);
}