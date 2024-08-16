import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { ThemeContext } from '../../contexts/ThemeProvider';
import { useContext } from 'react';

const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [theme, setTheme] = useState(null);


    const context = useContext(ThemeContext);

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
        return(
            <div className="py-4 px-10">

                <div className='flex justify-between'>
                    <div>
                        <Skeleton height={20} width={"20%"}/>
                    </div>

                    <div className=''>
                        <Skeleton height={50} width={"15%"}/>
                    </div>
                </div>

                
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 flex flex-col">
                    <div className="w-11/12 mx-auto my-4">
                        <Skeleton height={384} width={"100%"}/>
                    </div>

                    <div className="w-11/12 mx-auto my-4">
                        <Skeleton height={384} width={"100%"}/>
                    </div>

                    <div className="w-11/12 mx-auto my-4">
                        <Skeleton height={384} width={"100%"}/>
                    </div>

                    <div className="w-11/12 mx-auto my-4">
                        <Skeleton height={384} width={"100%"}/>
                    </div>

                </div> 
                </div>
        )
    }

    const filterProduct = (filter) => {
        const updateProducts = data.filter((filtered) => filtered.category === filter);
        setFilter(updateProducts);
    }

    const ShowProducts = () => {
        return(
            // <>
            // {
            //     error ? <h1 className="error"> { error } Can't Fetch Products</h1> 
            //     : 
            //     <div className={context.theme === 'light'? "product-container" : "product-container product-darkmode"}>
            //     <h1> Latest Products </h1>

            //         <div className="filter-buttons">
            //             <button className={context.theme === 'light' ? 'btn btn-outline-dark' : 'btn btn-outline-light'} onClick={() => setFilter(data)}> <span>All</span> <span><Icon icon="solar:global-outline" /></span> </button>
            //             <button className={context.theme === 'light' ? 'btn btn-outline-dark' : 'btn btn-outline-light'} onClick={() => filterProduct("men's clothing")}> <span>Men's Products</span><span><Icon icon="icons8:user-male" /></span> </button>
            //             <button className={context.theme === 'light' ? 'btn btn-outline-dark' : 'btn btn-outline-light'} onClick={() => filterProduct("women's clothing")}> <span>Women's Products</span><span><Icon icon="icons8:user-female" /></span> </button>
            //             <button className={context.theme === 'light' ? 'btn btn-outline-dark' : 'btn btn-outline-light'} onClick={() => filterProduct("electronics")}> <span>Electronics</span> <span><Icon icon="streamline:computer-screen-1-screen-device-electronics-monitor-diplay-computer" /></span> </button>
            //             <button className={context.theme === 'light' ? 'btn btn-outline-dark' : 'btn btn-outline-light'} onClick={() => filterProduct("jewelery")}> <span>Jewelries</span> <span><Icon icon="streamline:shopping-jewelry-diamond-2-diamond-money-payment-finance-wealth" /></span> </button>
            //         </div>

            //         <div className="main_products-container">
            //             {
            //                 filter.map(products => {
            //                     return(
            //                             <div className="main-product" key={products.id}>
            //                                 <div className="products-img">
            //                                     <img src={products.image} alt={products.title} />
            //                                 </div>

            //                                 <div className="details">
            //                                     <h5 className='products-title'>{products.title.substring(0, 12)}...</h5>
            //                                     <p className="products-price">$ {products.price}</p>
            //                                 </div>

            //                                 <Link to={`/products/${products.id}`} className={context.theme === 'light' ? 'btn btn-outline-dark' : 'btn btn-outline-light'}>Buy Now</Link>
            //                             </div>
            //                     )
            //                 })
            //             }
            //         </div>
                    
            //     </div>
            // }
            // </>
            <div className='py-4 px-10'>
                <div className='flex justify-between items-center'>
                    <h2>
                        Select Category of Products.
                    </h2>

                    <div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Select Category <i className='bx bxs-down-arrow' ></i> </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a className='font-semibold text-gray-400' onClick={() => setFilter(data)}> ALL </a></li>
                            <li><a className='font-semibold text-gray-400' onClick={() => filterProduct("men's clothing")}> MEN </a></li>
                            <li><a className='font-semibold text-gray-400' onClick={() => filterProduct("women's clothing")}> WOMEN </a></li>
                            <li><a className='font-semibold text-gray-400' onClick={() => filterProduct("electronics")}> ELECTRONICS </a></li>
                            <li><a className='font-semibold text-gray-400' onClick={() => filterProduct("jewelery")}> JEWELRY </a></li>
                        </ul>
                    </div>

                    </div>
                </div>


                <div className='md:grid md:grid-cols-2 lg:grid-cols-4 flex flex-col py-4'> 
                    {
                        filter.map((product) => {
                            return(
                                <div className="card bg-white md:w-11/12 shadow-xl mx-auto border border-orange-800 my-4 text-black" key={product.id}>
                                    <figure className="w-full h-64 cursor-pointer">
                                        <img
                                        src={product.image}
                                        alt={`${product.title.substring(0, 15)}...`}
                                        className="rounded-xl w-full h-full transition-all ease-in-out duration-150 hover:scale-110" />
                                    </figure>
                                    <div className="card-body items-center text-center py-3 px-1.5">
                                        <h2 className="card-title"> {product.title.substring(0, 15)}... </h2>
                                        <p> {product.description.substring(0, 100)}.. </p>
                                        <div className="card-actions">
                                            <Link to={`/products/${product.id}`} className="btn bg-orange-700 border-0 hover:bg-orange-800 text-black">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


    return ( 
        <>
            <div className="">
                {
                    loading ? <Loading /> : error ? <div className="h-dvh flex justify-center items-center"> <h2 className="text-red-600 text-2xl font-semibold text-center"> { error } There's is an error fetching products. </h2> </div> : <ShowProducts />
                }
            </div>
        </>
     );
}
 
export default Product;