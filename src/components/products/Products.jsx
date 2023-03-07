import './Products.css';
import { useState, useEffect } from 'react';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async() => {
            
        }
    },[])
    return ( 
        <>
            
        </>
     );
}
 
export default Products;