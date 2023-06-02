import { 
  Route, Routes, Link
} from 'react-router-dom';

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";


function App() {
  return ( 
    <div className="wrapper clear">
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
              <Link to="/about">
                About
              </Link>
            </p>
            <p>
              <Link to="/contacts">
                Contact
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
          <Link to="/favorites">
            <li className="favourites d-flex align-center">
              <p className="mr-15">
                Favourites
              </p>
              <img width={24.87} height={18} src="/img/Favourites(up).svg" alt="Favourites" />
            </li>
          </Link>
          <Link to="/cart">
            <li className="d-flex align-center mr-40 cu-p">
            <img width={23.75} height={20} src="/img/BuyCart.svg" alt="Buy"/>
              <div>
                <p className="countOfGoods">99+</p>
              </div>
            </li>
          </Link>
          {/* <Link to="/profile">

          </Link> */}
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <div className="bottom d-flex justify-between">
        <p>From the Russian Federation</p>
        <p className="cu-p">
          <Link to="/policy">
            <u>Privacy Policy</u>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default App;
