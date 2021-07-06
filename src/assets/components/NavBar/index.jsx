import './styles.sass';
import { useEffect, useState } from 'react';
import { Logo } from "../Global/index";
import { CategoriesList } from "../categoriesList/index";
import { MiniCart } from "../MiniCart/index";
import { getProducts } from '../../components/Global/index';

export const NavBar = (props) => {
    let [categories, setCategories] = useState([]);

    useEffect( () => {
        const waitForData = async () => {
            let data = await getProducts();
            let aux = data.map(element => {
                return {
                    id: element.id,
                    category: element.category
                }
            });
            setTimeout(() => {
                setCategories(aux);
            }, 2000);
            
        }
        waitForData();

    }, [])

    if(categories.length > 0) {
        let aux = categories.map(element => element)
    }
    
    return (
        <header>
            <Logo />         

            <nav className="menu">
                <ul>
                    {categories.map((element) => {
                        return (
                            <CategoriesList category={element.category} />
                        )
                    })}       
                    
                </ul>

                <MiniCart /> 
            </nav>
        </header>
    )
}