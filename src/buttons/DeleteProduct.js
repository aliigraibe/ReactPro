import { DeleteButton } from "../Styles";
import deleteProduct from "../store/actions"
import { useDispatch } from "react-redux";

const DeleteProduct =(props )=>{
   const dispatch = useDispatch()
return <DeleteButton onClick={()=>dispatch(deleteProduct(props.productId))}>Delete Product</DeleteButton>}

export default DeleteProduct;