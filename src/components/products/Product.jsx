import './Product.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
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
                    setFilter(data);
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
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )
    }

    const filterProduct = (filter) => {
        const updateProducts = data.filter((filtered) => filtered.category === filter);
        setFilter(updateProducts);
    }

    const ShowProducts = () => {
        return(
            <>
            {
                error ? <h1 className="error"> { error } Can't Fetch Products</h1> 
                : 
                <div className="product-container">
                <h1> Latest Products </h1>

                    <div className="filter-buttons">
                        <button className='btn btn-outline-dark' onClick={() => setFilter(data)}>All</button>
                        <button className='btn btn-outline-dark' onClick={() => filterProduct("men's clothing")}>Men's Products</button>
                        <button className='btn btn-outline-dark' onClick={() => filterProduct("women's clothing")}>Women's Products</button>
                        <button className='btn btn-outline-dark' onClick={() => filterProduct("electronics")}>Electronics</button>
                        <button className='btn btn-outline-dark' onClick={() => filterProduct("jewelery")}>Jewelries</button>
                    </div>

                    <div className="main_products-container">
                        {
                            filter.map(products => {
                                return(
                                        <div className="main-product" key={products.id}>
                                            <div className="products-img">
                                                <img src={products.image} alt={products.title} />
                                            </div>

                                            <div className="details">
                                                <h5 className='products-title'>{products.title.substring(0, 12)}...</h5>
                                                <p className="products-price">$ {products.price}</p>
                                            </div>

                                            <Link to={`/products/${products.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                        </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
            }
            </>
        )
    }


    return ( 
        <>
            <div className="products-container">
                {
                    loading ?  <Loading /> : <ShowProducts />
                } 
            </div>
        </>
     );
}
 
export default Product;