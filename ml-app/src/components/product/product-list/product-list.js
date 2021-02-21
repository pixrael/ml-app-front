import ProductItem from '../product-item/product-item';

function ProductList() {

    const imgUrl = 'https://vignette2.wikia.nocookie.net/reinoanimalia/images/d/dd/Gavilan_colirrojo_7.png/revision/latest?cb=20151214221805&path-prefix=es';

    return (
        <ProductItem imgUrl={imgUrl} />
    );

}

export default ProductList;