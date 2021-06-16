import './styles.sass';
import { ProductCard } from "../../components/ProductCard/index";

export const ItemListContainer = (props) => { 
    return (
        <section className="item-list-container">
            <h2>¡Bienvenido {props.name}!</h2>
            <p>Te recomendamos estas <span>{props.categoryName}</span></p>
            <ProductCard img={'https://www.fmicassets.com/Damroot/ZoomJpg/10002/0970713543_gtr_frt_001_rr.jpg'} title={'Fender Redondo Player'} excerpt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'} price={'15,500.99'} stock={'3'} />
            <ProductCard img={'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0972023254_gtr_frt_001_rr.jpg'} title={'American Acoustasonic® Stratocaster®'} excerpt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'} price={'20,100.00'} stock={'8'} />
            <ProductCard img={'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0970943122_gtr_frt_001_rr.jpg'} title={'Newporter Special Mahogany'} excerpt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'} price={'18,240.50'} stock={'2'} />
            <div className="btn"><a href="{props.categoryLink}">Ver más</a></div>
        </section>
    )        
}