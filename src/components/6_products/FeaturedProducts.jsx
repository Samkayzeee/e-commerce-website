import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from '../../contexts/ThemeProvider';
import { useContext } from 'react';




const FeaturedProducts = () => {

    const context = useContext(ThemeContext);

    const [data, setData] = useState([]);
    // const [filter, setFilter] = useState([]);
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
                    console.log(data);
                    setData(data);
                    // setFilter(data);
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



    return ( 
        <div className="py-4 px-16">
        
            <div className="grid grid-cols-3">
            {
                data.slice(0, 6).map(products => {
                    return(
                            <div className="card bg-base-100 image-full w-3/4 mx-auto shadow-xl my-4 h-96" key={products.id}>
                                <figure className="w-full h-full">
                                    <img
                                    src={products.image}
                                    alt={products.title} 
                                    className="w-full h-full object-cover"/>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title"> {products.title.substring(0, 15)}... </h2>
                                    <p> {products.description.substring(0, 100)}.. </p>

                                    <div className="card-actions justify-end items-center">
                                        <h2 className="font-bold"> {products.price} $ </h2>
                                        <Link to={`/products/${products.id}`} className="btn btn-primary">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
            </div>

        <Link to={'/products'}>View All Products</Link>

        </div>
     );
}
 
export default FeaturedProducts;