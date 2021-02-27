import { useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

import ProductList from './product-list';

function ProductListWrapper(props) {
    const { search } = useLocation();
    const keyword = new URLSearchParams(search).get('search');

    const history = useHistory();

    const onSelectedProduct = (id) => {
        props.onSelectedProduct(id, history);
    }


    const [products, setProducts] = useState([]);

    useEffect(() => {

        const baseUrl = process.env.REACT_APP_BASE_URL;
        getProductList( `${baseUrl}/api/items/search?q=`, keyword, (resp) => {
            setProducts(resp.data.results.splice(0, 4));
            props.onChangeCategoryPath(resp.data.most_repeated_category_data.path_from_root);

        });
    }, [keyword]);

    return (<ProductList searchResults={products} onSelectedProduct={onSelectedProduct} />);
}

async function getProductList(url, keyword, callback) {

    const resp = await axios.get(`${url}${keyword}`);
    callback(resp);
}


export default ProductListWrapper;