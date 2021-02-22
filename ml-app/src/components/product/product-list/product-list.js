import ProductItem from '../product-item/product-item';
import './product-list.scss';

function ProductList() {

    const imgUrl = 'https://vignette2.wikia.nocookie.net/reinoanimalia/images/d/dd/Gavilan_colirrojo_7.png/revision/latest?cb=20151214221805&path-prefix=es';

    const ret = [1, 2].map((val, index) => {
        return (
            <ProductItem key={index.toString()} className="product-item" imgUrl={imgUrl} />
        );
    });


    return (
        <div className="item-wrapper" >
            {ret}
        </div>

    );

}

export default ProductList;