

const products = [
    {
         name:"Men Wears",
         img_url:"/assets/first_men_wear.jpg"
    },
    {
         name:"Men Wears",
         img_url:"/assets/second_men_wear.jpg"
    },
    {
        name:"Ladies Jewelry",
        img_url:"/assets/first_jewelry.jpg"
   },
    {
         name:"Women Wears",
         img_url:"/assets/first_women_wear.jpg"
    },
    {
         name:"Women Wears",
         img_url:"/assets/second_women_wear.jpg"
    }
];


const Few_Products = () => {
    return ( 
            <div className="flex justify-between md:flex-row flex-col items-center py-14">
                         {
                              products.map((product, index) => {
                                   return(
                                        <div className="md:w-1/6 my-4 md:my-0" key={index}>
                                             <div className="p-2 w-fit border-2 border-orange-800 rounded-full mx-auto">
                                                  {/* <img src={product.img_url} alt={product.name} className="rounded-full"/> */}
                                                  <div
                                                  className="h-32 rounded-full w-32 border cursor-pointer transition-all ease-in-out hover:scale-110"
                                                  style={{
                                                       background:`url(${product.img_url})`,
                                                       backgroundPosition: "center",
                                                       backgroundSize: "contain",
                                                       backgroundRepeat: "no-repeat"
                                                  }}
                                                  >

                                                  </div>
                                             </div>
                                             <h2 className="text-center font-thin text-lg"> { product.name } </h2>
                                        </div>
                                   )
                              })
                         }
                    </div>        
     );
}
 
export default Few_Products;