
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

export async function getProducts() {
    const response = await fetch (
        '/data/test.json'
        // 'https://api.mercadolibre.com/sites/MLA/search?q=guitarras'
    );
    const data = await response.json();
    return data.results;
}

export async function getProductDetail() {
    const response = await fetch (
        'https://api.mercadolibre.com/items/MLA919142773#json'
    );
    const data = await response.json();
    return data.results;
}