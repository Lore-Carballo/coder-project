import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <div className="logo">
            <Link to={'/'}>
                <img src="/img/logo.svg" alt="Logo" />
            </Link>
        </div>        
    )
}