import './styles.sass';
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ItemDetail } from "../../components/ItemDetail";
import { getProductDetail } from '../../global';

export const ItemDetailContainer = (props) => { 
    let [product, setProduct] = useState({});
    let { id } = useParams();

    useEffect( () => {
        const waitForData = async () => {
            let data = await getProductDetail(id);
            let aux = {
                title: data.title,
                price: data.price,
                author: data.author,
                editorial: data.editorial,
                language: data.language,
                stock: data.stock,
                image: data.image,
                category: data.category,
                condition: 'Condition',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            };
            setTimeout(() => {
                setProduct(aux);
            }, 2000);
        }
        waitForData();
    }, [])
    

    return (
        <div className="item-detail">
            {
                !!Object.keys(product).length
                    ? <ItemDetail item={product} />
                    : <img className="loading-gif" src="/img/loading-animation.gif" alt="Cargando" />
            }
        </div>
    )  
    // return (
    //     <section className="item-detail-container">

    //         <ItemDetail />
         
            
    //     </section>
        
    // )        
}