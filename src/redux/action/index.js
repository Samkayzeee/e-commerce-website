// To add Cart

export const addToCart = (product) => {
    return{
        type: "ADDTOCART",
        payload: product
    }
}

// To delete from Cart

export const DeleteFromCart = (product) => {
    return{
        type: "DELFROMCART",
        payload: product
    }
}