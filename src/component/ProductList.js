import ProductItem from "./ProductItem" 
import products from "../products"
import { Flxii, Row } from "../Styles";
import {useState} from  "react"
import SearchBar from "./SearchBar";
import {Route,Switch} from "react-router"
import { Link } from "react-router-dom";
const ProductList =(props )=>{
  const  [query, setQuery] = useState("");

 let descr =
props.products.filter((product) => product.name.includes(query)).map((product)=> 
  <ProductItem product={product} key={product.id} 
deleteproduct={props.deleteproduct} />
  );   
 
return (
<Flxii>
  <Link to="/">Home</Link>


<Route exact path="/">Home</Route>

  <Route exact path="/products"> 
  <SearchBar setQuery={setQuery}/>
<Row>{descr}</Row>      

</Route>


</Flxii>

)}
export default ProductList;