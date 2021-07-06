import './styles.sass';
import { useContext } from "react";
import { ItemListContainer } from "../ItemListContainer/index";
import { shopContext } from '../../components/Global/shopContext/index';


export const Home = () => {
    const estadoGlobal = useContext(shopContext);
    console.log(estadoGlobal);
    return (    
        <div className="Home">
            <div className="page-content">
                <ItemListContainer name={'Roberto'} categoryName={'Libros Deluxe'} categoryLink={'/libros-deluxe'} />
            </div>            
        </div>
    )
}