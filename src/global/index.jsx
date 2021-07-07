export const Content = () => {
    return (
        <div className="content">
            <h1>Bienvenid@ a <span>LogoIpsum</span></h1>
            <img src="/img/hello.gif" alt="Hello" />
        </div>
    )
}

export async function getProducts() {
    const response = await fetch('/data/test.json');
    const data = await response.json();
    return data.books;
}

export async function getCategories() {
    const response = await fetch('/data/test.json');
    const data = await response.json();
    return data.categories;
}

export async function getProductDetail(id) {
    const products = await getProducts();
    const product = products.find(element => element.id == id);
    return product;
}

export async function getProductsByCategory(category) {
    const products = await getProducts();
    const filteredProducts = products.filter(element => element.category == category);
    return filteredProducts;
}


/*::::::::::::::::::::::::::::::::::: API MERCADOLIBRE ::::::::::::::::::::::::::::::::::::::::*/

export async function getProductsML(query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    const data = await response.json();
    return data.results;
}

export async function getProductDetailML(id) {
    //ej. id MLA919142773
    const response = await fetch(`https://api.mercadolibre.com/items/${id}#json`);
    const data = await response.json();
    return data;
}

