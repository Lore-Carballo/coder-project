
export const Logo = () => {
    return (
        <div className="logo">
            <img src="/img/logo.svg" alt="Logo" />
        </div>
    )
}

export const Content = () => {
    return (
        <div className="content">
            <h1>Bienvenid@ a <span>LogoIpsum</span></h1>
            <img src="/img/hello.gif" alt="Hello" />
        </div>
    )
}

export async function getData() {
    const response = await fetch (
        '/data/test.json'
        //'https://api.mercadolibre.com/sites/MLA/search?q=zapatillas'
    );
    const data = await response.json();
    return data.results;
}