import './product-item.scss';
import shippingIcon from '../../../assets/ic_shipping.png';

function ProductItem(props) {
    return (
        <div className="row-product">
            <img className="img-product" src={props.imgUrl} />
            <div className="product-info">
                <div className="left-price-title" >
                    <div className="price-container">
                        <div className="price" >
                            $ 1.980
                        </div>
                        <div className="shipping-container" >
                            <img src={shippingIcon} />
                        </div>

                    </div>

                    <div className="title" >
                        Gavilan como nuevo
                    </div>
                    <div className="status" >
                        Completo Único!
                    </div>
                </div>
                <div className="right-location" >
                    Buenos Aires
                </div>

            </div>
        </div>
    );
}

export default ProductItem;