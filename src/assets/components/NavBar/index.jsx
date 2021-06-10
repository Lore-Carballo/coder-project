import './styles.sass';

import { Logo } from "../Global/index";
import { MiniCart } from "../MiniCart/index";

export const NavBar = () => {
    return (
        <header>
            <Logo />         

            <nav className="menu">
                <ul>
                    <li><a href="#">Categoría 1</a></li>
                    <li><a href="#">Categoría 2</a></li>
                    <li><a href="#">Categoría 3</a></li>
                    <li><a href="#">Categoría 4</a></li>
                </ul>

                <MiniCart /> 
            </nav>
        </header>
    )
}