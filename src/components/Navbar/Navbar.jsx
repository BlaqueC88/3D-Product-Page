import { useState } from "react";
import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">DRACIEL</div>
      </div>

      <div className="nav-mid">
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Categories</li>
        </ul>
        <div className="search-container">
          <FaSearch className="inherit" color="gray" />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="nav-right">
        <div className="button-icon">
          <FaRegHeart className="inherit wishlist-icon" />
          <button>Wishlist</button>
        </div>
        <div className="button-icon">
          <FaShoppingCart className="inherit cart-icon" />
          <button>Cart</button>
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Categories</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;