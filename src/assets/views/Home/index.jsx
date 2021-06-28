import './styles.sass';
import { ItemListContainer } from "../ItemListContainer/index";


export const Home = () => {
    return (    
        <div className="Home">
            <div className="page-content">
                <ItemListContainer name={'Roberto'} categoryName={'Libros Deluxe'} categoryLink={'/libros-deluxe'} />
            </div>            
        </div>
    )
}