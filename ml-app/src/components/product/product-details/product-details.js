import './product-details.scss';

function ProductDetails(props) {
    const imgUrl = props.imgUrl;
    const condition = props.condition;
    const soldQuantity = props.soldQuantity;
    const title = props.title;
    const price = props.price;

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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>

                </div>
            </div>
        </div>);

}

export default ProductDetails;