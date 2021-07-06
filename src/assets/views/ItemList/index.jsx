import './styles.sass';
import { Item } from "../../components/Item/index";
import { useEffect, useState } from 'react';
import { getProducts } from '../../components/Global/index';

export const ItemList = (props) => { 
    let [books, setBooks] = useState([]);

    useEffect( () => {
        const waitForData = async () => {
            let data = await getProducts();
            let aux = data.map(element => {
                return {
                    // title: element.title,
                    // image: element.thumbnail,
                    // price: element.price
                    id: element.id,
                    image: element.image,
                    title: element.title,
                    price: element.price,
                    stock: element.stock
                }
            });
            setTimeout(() => {
                setBooks(aux);
            }, 2000);
            
        }
        waitForData();

    }, [])

    if(books.length > 0) {
        let aux = books.map(element => element)
    }

    return (
        <div className="item-list">

            {books.map((element) => {
                return (
                    <Item id={element.id} img={element.image} title={element.title} price={element.price} stock={element.stock} />
                )
            })}           
            
            <div className="btn"><a href={props.categoryLink}>Ver más</a></div>
        </div>
    )      

      
}