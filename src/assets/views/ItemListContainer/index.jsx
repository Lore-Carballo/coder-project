import './styles.sass';
import { ItemList } from "../../views/ItemList/index";

export const ItemListContainer = (props) => { 
    return (
        <section className="item-list-container">
            <h2>¡Bienvenido {props.name}!</h2>
            <p>Te recomendamos estos <span>{props.categoryName}</span></p>

            <ItemList />
         
            
        </section>
        
    )        
}