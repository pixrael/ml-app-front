import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();


    return (
        <div>Product Details {id}</div>
    );
}

export default ProductDetails;