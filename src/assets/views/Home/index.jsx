import './styles.sass';
import { NavBar } from "../../components/NavBar/index";
import { ItemListContainer } from "../ItemListContainer/index";

export const Home = () => {
    return (    
        <div className="Home">
            <NavBar />
            <div className="page-content">
                <ItemListContainer name={'Roberto'} categoryName={'Libros Deluxe'} categoryLink={'/libros-deluxe'} />
            </div>            
        </div>
    )
}