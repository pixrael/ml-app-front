import { useEffect, useState } from 'react';

import axios from 'axios';

import Breadcrum from './Breadcrum';


function BreadCrumWrapper(props) {
    const categoryId = props.categoryId;

    const [categoryPath, setCategoryPath] = useState([]);

    useEffect(() => {

        if (categoryId) {
            getCategoryData('https://api.mercadolibre.com/categories/', categoryId, (categoryData) => {

                const path = categoryData.data.path_from_root;

                setCategoryPath(path);
            });

        }

    }, [categoryId]);

    return (<Breadcrum categoryPath={categoryPath} />);
}


async function getCategoryData(url, categoryId, callback) {

    const categoryData = await axios.get(`${url}${categoryId}`);

    callback(categoryData);
}


export default BreadCrumWrapper;
