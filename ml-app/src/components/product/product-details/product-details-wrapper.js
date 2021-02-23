import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function ProductDetailsWrapper() {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        getProductDetails('https://api.mercadolibre.com/sites/MLA/items/', id, (resp) => {
            setDetails(resp.data.results);
        });
    }, [id]);

    return (<div>ProductDetailWrapper</div>);
}

async function getProductDetails(url, id, callback) {

    const resp = await axios.get(`${url}${id}`);

    callback(resp);
}

export default ProductDetailsWrapper;