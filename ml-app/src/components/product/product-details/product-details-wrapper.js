import { useState, useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import ProductDetails from './product-details';


function ProductDetailsWrapper(props) {
    const { id } = useParams();
    const [details, setDetails] = useState({
        imgUrl: '',
        condition: '',
        soldQuantity: 0,
        title: '',
        price: 0,
        description: ''
    });

    useEffect(() => {
        getProductDetails('https://api.mercadolibre.com/items/', id, (details, description) => {
            const categoryId = details.data.category_id;
            props.onChangeCategoryId(categoryId);

            const imgUrl = details.data.pictures[0].url;
            const condition = details.data.condition === 'new' ? 'nuevo' : 'usado';
            const soldQuantity = details.data.sold_quantity;
            const title = details.data.title;
            const price = details.data.price;

            setDetails({ imgUrl, condition, soldQuantity, title, price, description });
        });

    }, [id]);

    return (<ProductDetails imgUrl={details.imgUrl} condition={details.condition} soldQuantity={details.soldQuantity} title={details.title} price={details.price} description={details.description} />);
}

async function getProductDetails(url, id, callback) {
    const details = await axios.get(`${url}${id}`);
    const description = await axios.get(`${url}${id}/description`);

    callback(details, description.data.plain_text);
}



export default ProductDetailsWrapper;