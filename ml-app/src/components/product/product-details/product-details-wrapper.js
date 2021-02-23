import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './product-details';

import axios from 'axios';

function ProductDetailsWrapper() {
    const { id } = useParams();
    const [details, setDetails] = useState({
        imgUrl: '',
        condition: '',
        soldQuantity: 0,
        title: '',
        price: 0
    });

    useEffect(() => {
        getProductDetails('https://api.mercadolibre.com/items/', id, (resp) => {
            const imgUrl = resp.data.pictures[0].url;
            const condition = resp.data.condition === 'new' ? 'nuevo' : 'usado';
            const soldQuantity = resp.data.sold_quantity;
            const title = resp.data.title;
            const price = resp.data.price;
            setDetails({ imgUrl, condition, soldQuantity, title, price });

        });

    }, [id]);

    return (<ProductDetails imgUrl={details.imgUrl} condition={details.condition} soldQuantity={details.soldQuantity} title={details.title} price={details.price} />);
}

async function getProductDetails(url, id, callback) {

    const resp = await axios.get(`${url}${id}`);

    callback(resp);
}

export default ProductDetailsWrapper;