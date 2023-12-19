import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import {ComponentHeaderLogin } from './includes/ComponentHeaderLogin'


export const ComponenteHeader = () => {
     return (
 
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
                <Link to='./pages/login' relative="path"> <p>Logeate
                
                    
                </p></Link>
                
            </div>
        </nav>
    </header>
    
);
}
<BrowserRouter>
    <Routes>
      <Route path="./ComponentHeaderLogin" element={<ComponentHeaderLogin />}>

      </Route>
    </Routes>
    </BrowserRouter>
export const enrutador = () => {
    
  
}