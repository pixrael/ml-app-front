import ProductItem from '../product-item/product-item';
import './product-list.scss';

function ProductList(props) {

    const products = props.searchResults;

        const ret = products.map((product, index) => {

        const id = product.id;
        const imgUrl = product.thumbnail;
        const price = product.price;
        const title = product.title;
        const stateName = product.address.state_name;
        const freeShipping = product.shipping.free_shipping;

        return (
            <ProductItem className="product-item" key={id} id={id} imgUrl={imgUrl} price={price} title={title} stateName={stateName}
                freeShipping={freeShipping} handleSelection={props.onSelectedProduct} />
        );
    });


    return (
        <div className="item-wrapper" >
            {ret}
        </div>);

}

export default ProductList;