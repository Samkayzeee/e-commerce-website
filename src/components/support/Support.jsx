


const support = [
    {
         title:"ONLINE SUPPORT 24/7",
         content:"Get help anytime, anywhere with our 24/7 online support, always here to assist you."
    },
    {
         title:"MONEY BACK GUARANTEE",
         content:"Shop with confidence—our 100% Money Back Guarantee ensures your satisfaction or your money back, no questions asked."
    },
    {
         title:"FREE SHIPPING AND RETURN",
         content:"Enjoy free shipping and hassle-free returns on all your purchases."
    }
];




const Support = () => {
    return ( 
        <main>
            <div className="bg-orange-800">
                         <div className="md:flex justify-center md:w-full w-4/5 mx-auto">
                              {
                                   support.map((support, index) => {
                                   return(
                                        <div key={index} className="md:w-1/4 py-14 mb-3 md:mb-0 px-5 border-s border-r border-white bg-orange-900 text-white">
                                             <h2 className="font-extrabold text-lg"> { support.title } </h2>
                                             <p className="text-sm leading-7"> { support.content } </p>
                                        </div>
                                   )
                              })
                              }
                         </div>
                    </div>
        </main>
     );
}
 
export default Support;