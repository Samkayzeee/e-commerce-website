import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
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
                    // console.log(data);
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



    const Loading = () => {
        return(
            <div className="py-4 px-16">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 flex flex-col">
                    <div className="md:w-3/4 mx-auto">
                        <Skeleton height={384} width={"100%"}/>
                    </div>

                    <div className="md:w-3/4 mx-auto">
                        <Skeleton height={384} width={"100%"}/>
                    </div>

                    <div className="md:w-3/4 mx-auto">
                        <Skeleton height={384} width={"100%"}/>
                    </div>
                </div> 
                </div>
        )
    }


    const Featured = () => {
        return(
            <div className="py-4 md:px-16">
        
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 flex flex-col">
            {
                data.slice(0, 6).map(products => {
                    return(
                            <div className="card bg-base-100 image-full md:w-3/4 w-11/12 mx-auto shadow-xl my-4 h-96" key={products.id}>
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
                                        <Link to={`/products/${products.id}`} className="btn border-0 bg-orange-800 transition-all ease-in-out duration-150 hover:bg-orange-900">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
            </div>

            <div className="flex justify-center my-6 text-white">
                <Link className="inline-block border border-solid py-3 md:px-10 px-6 rounded-lg bg-orange-800 transition-all ease-in-out duration-150 hover:bg-orange-900" to={'/products'}>View All Products <i className='bx bx-right-arrow-alt translate-y-0.5'></i> </Link>
            </div>

        </div>
        )
    }

    return ( 
        <main>
            {
                loading ? <Loading /> : error ? <div className="h-80 flex justify-center items-center"> <h2 className="text-red-600 text-2xl font-semibold text-center"> { error } There's is an error fetching products. </h2> </div> : <Featured />
            }
        </main>
     );
}
 
export default FeaturedProducts;