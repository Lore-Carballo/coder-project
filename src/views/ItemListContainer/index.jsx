import './styles.sass';
import { useParams } from "react-router-dom";
import { ItemList } from "../../components/ItemList/index";
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../global/index';

export const ItemListContainer = (props) => {
    let [books, setBooks] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const waitForData = async () => {
            let data;
            if (id) {
                data = await getProductsByCategory(id)
            } else {
                data = await getProducts();
            }

            setTimeout(() => {
                setBooks(data);
            }, 200);
        }
        waitForData();
    }, [id])

    return (
        <section className="item-list-container">
            <h2>¡Bienvenido {props.name}!</h2>
            {/* <p>Te recomendamos estos <span>{props.categoryName}</span></p> */}
            <ItemList items={books} />
        </section>
    )
}