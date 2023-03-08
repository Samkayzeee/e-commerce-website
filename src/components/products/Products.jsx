import './Products.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async() => {
            setLoading(true);
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                if(response.status !== 200){
                    throw Error("Their's a problem fetching products");
                }
                    const data = response.data;
                    setData(data);
            } catch (error) {
                setError(error.message);
                if(error){
                    setLoading(false);
                }
            }
            setLoading(false);
        }
        getProducts();
    },[])


    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }


    const showProducts = () => {
        return(
            <>
                <div className="product-container">
                    
                </div>
            </>
        )
    }


    return ( 
        <>
            <div className="products-container">
                    {
                        !error ? <h1 className=''>Latest Products</h1> : <h1 className='error'> { error } </h1>
                    }
            </div>
        </>
     );
}
 
export default Products;