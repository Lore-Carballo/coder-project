import './styles.sass';
import { ProductCard } from "../../components/ProductCard/index";
import { useEffect, useState } from 'react';
import { getData } from '../../components/Global/index';

export const ItemListContainer = (props) => { 
    let [books, setBooks] = useState([]);

    useEffect( () => {
        const waitForData = async () => {
            let data = await getData();
            let aux = data.map(element => {
                return {
                    // title: element.title,
                    // image: element.thumbnail,
                    // price: element.price
                    image: element.image,
                    title: element.title,
                    price: element.price,
                    stock: element.stock
                }
            });
            setBooks(aux);
        }
        waitForData();

    }, [])

    if(books.length > 0) {
        let aux = books.map(element => element)
    }

    return (
        <section className="item-list-container">
            <h2>¡Bienvenido {props.name}!</h2>
            <p>Te recomendamos estos <span>{props.categoryName}</span></p>

            {books.map((element) => {
                return (
                    <ProductCard img={element.image} title={element.title} price={element.price} stock={element.stock} />
                )
            })}           
            
            <div className="btn"><a href={props.categoryLink}>Ver más</a></div>
        </section>
    )        
}