import './product-details.scss';

function ProductDetails(props) {
    const imgUrl = props.imgUrl;
    const condition = props.condition;
    const soldQuantity = props.soldQuantity;
    const title = props.title;
    const price = props.price;
    const description = props.description;

    return (
        <div className="root-det">
            <div className="container-det" >
                <div className="upperSection" >
                    <div className="img-container" ><img src={imgUrl} /></div>

                    <div className="info" >
                        <div className="info-data" >
                            <div className="statusQty" >{condition} - {soldQuantity} vendidos</div>
                            <div className="title" >{title}</div>
                            <div className="price" >${price}</div>
                            <button className="buy-button">Comprar</button>
                        </div>

                    </div>

                </div>
                <div className="descriptionSection" >
                    <div className="title" >Descripción del producto</div>
                    <div className="description" >
                        {description}
                    </div>

                </div>
            </div>
        </div>);

}

export default ProductDetails;