import './styles.sass';
import { ItemDetail } from "../../components/ItemDetail/index";
import { useEffect, useState } from 'react';
import { getProductDetail } from '../../components/Global/index';

export const ItemDetailContainer = (props) => { 
    let [products, setProducts] = useState({});

    useEffect( () => {
        const waitForData = async () => {
            let data = await getProductDetail();
            let aux = {
                title: data.title,
                image: data.thumbnail,
                price: data.price,
                stock: data.available_quantity,
                condicion: data.condition,
                descripcion: data.description,
            };
            setTimeout(() => {
                setProducts(aux);
            }, 2000);
        }
        waitForData();
    }, [])
    

    return (
        <div className="item-list">
            {
                !!Object.keys(products).length
                ? <ItemDetail item={products} img={products.image} title={products.title} price={products.price} stock={products.stock} description={products.descripcion} />
                :  <h1>Loading...</h1>
            }
            <div className="btn"><a href={props.categoryLink}>Ver más</a></div>
        </div>
    )    
    // return (
    //     <section className="item-detail-container">

    //         <ItemDetail />
         
            
    //     </section>
        
    // )        
}