
const addProductAction = (product)=>{
    
    return {
        type: "ADD_PRODUCT",
        product
    }
}
const addParcelAction = (parcel)=>{
    
    return {
        type: "ADD_PARCEL",
        parcel
    }
}

export {
    addProductAction,addParcelAction
}