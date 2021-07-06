import './styles.sass';
import { Link, useParams } from "react-router-dom";

export const CategoriesList = (props) => {
    return (
        <li><Link to={{pathname: `/categories/${props.category}`}}>{props.category}</Link></li>
    )
}