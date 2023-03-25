import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DefaultLayout from './../../layouts/DefaultLayouts/DefaultLayout';
import './ViewProducts.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleCart } from "../../redux/handleCart";
import Skeleton from "react-loading-skeleton";



const ViewProductsPage = () => {
    const { id } = useParams();
    const [product, setproduct] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let token = localStorage.getItem("token");
    const dispatch = useDispatch();

    // fetching single product
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
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
            <div className="viewproducts-loading">
                <div className="img col-md-6">
                    <Skeleton height={450} width={"100%"}/>
                </div>

                <div className="details col-md-6">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} width={150} />
                    <Skeleton height={150} />
                    <div className="btns">
                        <button><Skeleton height={40} width={100}/></button>
                        <button><Skeleton height={40} width={100} /></button>
                    </div>
                </div>
            </div>


            </>
        )
    }
    const addToCart = () => {
        dispatch(handleCart.addCart(product));
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
                        <div className="btns">
                            <button className="btn btn-dark" onClick={addToCart}>Add to Cart</button>
                            <Link className="btn btn-outline-dark ms-2" to={'/cart'}>Go to Cart</Link>
                        </div>
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