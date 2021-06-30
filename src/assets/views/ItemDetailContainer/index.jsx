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
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            };
            setTimeout(() => {
                setProducts(aux);
            }, 2000);
        }
        waitForData();
    }, [])
    

    return (
        <div className="item-detail">
            {
                !!Object.keys(products).length
                ? <ItemDetail item={products} img={products.image} title={products.title} price={products.price} stock={products.stock} description={products.descripcion} />
                :  <img className="loading-gif" src="/img/loading-animation.gif" alt="Cargando" />
            }
        </div>
    )    
    // return (
    //     <section className="item-detail-container">

    //         <ItemDetail />
         
            
    //     </section>
        
    // )        
}