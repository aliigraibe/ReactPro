const DELETE_PRODUCT = "DELETE_PRODUCT"
const deleteProduct=(productId )=>{
return{
    type : DELETE_PRODUCT,
    payload:{
        
       productId:productId

    }}

}
export default deleteProduct;