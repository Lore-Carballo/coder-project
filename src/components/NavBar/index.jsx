import './styles.sass';
import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { CartWidget } from "../CartWidget";
import { getCategories } from '../../global';
import { ShopContext } from '../../context';
import { Item } from '../Item';

export const NavBar = (item) => {
    const {cantidadRequerida} = useContext(ShopContext);
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        const waitForData = async () => {
            let data = await getCategories();
            
            setTimeout(() => {
                setCategories(data);
            }, 200);
        }
        waitForData();

    }, [])

    return (
        <header>
            <Logo />
            <nav className="menu">
                <ul>
                    {
                        categories.map(
                            (category, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/category/${category}`} >{category}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
                <CartWidget cantidadCart={cantidadRequerida} nameCart={item.title} />
            </nav>
        </header>
    )
}