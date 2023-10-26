

import { CartWidget } from './CartWidget';

import 'bootstrap/dist/css/bootstrap.css';

export const  Navbar = () => {
    return (
        <nav>
        <a href="#" className='navbar-brand'>
            <img src="images/onlineShop-logo.png" alt="logo" width={100} header={100} />
        </a>
        <ul className="nav-list">
            <li className="fs-2">
                Cart items: <span className="cart-count"></span>
            </li>
        </ul>
        <CartWidget />
        </nav>
    );
    
};
export default Navbar;



