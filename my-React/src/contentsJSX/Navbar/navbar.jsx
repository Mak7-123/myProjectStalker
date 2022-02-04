import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <Link to="/profile">Профіль</Link>
            </div>
            <div>
                <Link to="/dialogs">Повідомлення</Link>
            </div>
            <div>
                <Link to="/news">Новини</Link>
            </div>
            <div>
                <Link to="/video">Відео</Link>
            </div>
            <div>
                <Link to="/friends">Друзі</Link>
            </div>
            <div>
                <Link to="/contact">Контакти</Link>
            </div>
        </nav>
    )
}

export default Navbar;