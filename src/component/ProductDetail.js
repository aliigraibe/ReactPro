
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import {Flxii, Logo, PhonePic} from "../Styles"


const ProductDetal  = (props)=> {

  const  productSlug  = useParams().productSlug
  const product = props.products.find((product) => product.Slug === productSlug);
if(!product) return <Redirect to ="/"/>

 return (
        <div><Flxii>
<Link
>
        <PhonePic alt = {product.name} src={product.image}/>
       </Link> <p>
          {product.name}
        </p>
      
        <p>
        {product.Price}
        </p>      <p>
          {product.description}
        </p>

        
        <Logo to = "/">Go Back </Logo>
</Flxii>
          </div>);



  };
  
export default ProductDetal;

