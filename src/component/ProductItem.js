import { PhonePic } from "../Styles";
import DeleteProduct from "../buttons/DeleteProduct"
import { Link } from "react-router-dom";


const ProductItem = (props) => {
  const product=props.product;
    return (
        <div><Link to={`/products/${product.Slug}`} >
        <PhonePic alt = {product.name} src={product.image}/>
    
        </Link>

<p>
        {product.name}
        </p>
      
        <p>
        {product.Price}
        </p> 
        <DeleteProduct deleteproduct ={props.deleteproduct} productId={product.id}/>    
          </div>);
  };
  
  export default ProductItem;
  