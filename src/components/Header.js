import { 
    Route, Routes, Link
} from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';
import Cart from '../pages/Cart.jsx';
import Policy from '../pages/Policy.jsx';
import Order from '../pages/Order';
import Favorites from '../pages/Favorites.jsx'
// import Profile from '../pages/Profile'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import Authorization from '../pages/Authorization';

function Header(){
    return(
        <div className='header'>
            <header className="mb-10 d-flex justify-between align-center"> 
                <div className="d-flex align-center">
                <div className="headerMenu d-flex align-center">
                    <p>
                    <Link to="/">
                        Home
                    </Link>
                    </p>
                    <p>
                    <Link to="/products">
                        Products
                    </Link>
                    </p>
                    <p>
                    <Link to="/contacts">
                        Contact
                    </Link>
                    </p>
                    <p>
                    <Link to="/about">
                        About
                    </Link>
                    </p>
                    <h1 className="text-uppercase">
                    <Link to="/">
                        luna
                    </Link>
                    </h1>
                </div>
                </div>
                <ul className="d-flex align-center headerRight">
                <li className="favourites">
                    <Link className="d-flex align-center" to="/favorites">
                    <p className="mr-15">
                        Favourites
                    </p>
                    <img width={24.87} height={18} src="/img/Favourites(up).svg" alt="Favourites" />
                    </Link>
                </li>
                <li className="mr-20 cu-p">
                    <Link className="d-flex align-center" to="/cart">
                    <img width={23.75} height={20} src="/img/BuyCart.svg" alt="Buy"/>
                    <div>
                        <p className="countOfGoods">99+</p>
                    </div>
                    </Link>
                </li>
                <Link to="/profile">
                    <li>
                    <img width={32} height={32} src="/img/profile.svg" alt="Buy"/>
                    </li> 
                </Link>
                </ul>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/order" element={<Order />} />
                <Route path="/favorites" element={<Favorites />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route path="/profile" element={<Authorization />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
}

export default Header;