import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DefaultLayout from './../../layouts/DefaultLayouts/DefaultLayout';
import './ViewProducts.css';



const ViewProductsPage = () => {
    const { id } = useParams();
    const [product, setproduct] = useState({});
    const [loading, setLoading] = useState(false);


    // fetching single product
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            const getProduct = response.data;
            setproduct(getProduct);
            setLoading(false);
        }
        getProduct();
    },[]);


    // loading
    const Loading = () => {
        return(
            <>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            </>
        )
    }

    // showing products
    const ShowProduct = () => {
        return(
            <>
                <div className="main-viewproduct">
                    <div className="product-img">
                        <img src={product.image} alt="" />
                    </div>

                    <div className="details">
                        <h4 className="category">{product.category}</h4>
                        <h1 className="title">{product.title}</h1>
                        <p className="rating">rating {product.rating && product.rating.rate} <i className="fa-solid fa-star"></i></p> 
                        <h3 className="price">$ {product.price}</h3>
                        <p className="desc">
                            {product.description}
                        </p>
                        <button className="btn btn-dark">Add to Cart</button>
                        <Link className="btn btn-outline-dark ms-2" to={'/cart'}>Go to Cart</Link>
                    </div>
                </div>
            </>
        )
    }
    return ( 
        <>
        <DefaultLayout>
            <div className="viewproduct-container">
                    {
                        loading? <Loading /> : <ShowProduct />
                    }
            </div>
        </DefaultLayout>
        </>
     );
}
 
export default ViewProductsPage;