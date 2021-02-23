import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

import ProductList from './product-list';

function ProductListWrapper() {
    const { search } = useLocation();
    const keyword = new URLSearchParams(search).get('search');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductList('https://api.mercadolibre.com/sites/MLA/search?q=:', keyword, (resp) => {
            setProducts(resp.data.results);
        });
    }, [keyword]);

    return (<ProductList searchResults={products} />);
}

async function getProductList(url, keyword, callback) {

    const resp = await axios.get(`${url}${keyword}`);

    callback(resp);
}


export default ProductListWrapper;