import './product-item.scss';
import shippingIcon from '../../../assets/ic_shipping.png';

function ProductItem(props) {

    let shippingTag = '';

    if (props.freeShipping) {
        shippingTag = <div className="shipping-container" >
            <img src={shippingIcon} />
        </div>;
    }

    return (
        <div className="row">
            <div className="product-container">
                <div className="row-product">
                    <img className="img-product" src={props.imgUrl} />
                    <div className="product-info">
                        <div className="left-price-title" >
                            <div className="price-container">
                                <div className="price" >
                                    $ {props.price}
                                </div>
                                {
                                    shippingTag
                                }                                
                            </div>
                            <div className="title" >
                                {props.title}
                            </div>
                            <div className="status" >
                                Completo Único!
                    </div>
                        </div>
                        <div className="right-location" >
                            {props.stateName}
                        </div>

                    </div>
                </div>

            </div>


            <div className="divider">
                <div className="inner"></div>
            </div>


        </div>
    );
}

export default ProductItem;