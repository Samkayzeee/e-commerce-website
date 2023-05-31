import { createContext, useState } from "react";

const PaymentAmountContext = createContext();

export {PaymentAmountContext};



const AmountProvider = ({children}) => {
    const [amount, setAmount] = useState(0);

    return(
        <PaymentAmountContext.Provider value={{amount, setAmount}}>
            {children}
        </PaymentAmountContext.Provider>
    )

}

export default AmountProvider;