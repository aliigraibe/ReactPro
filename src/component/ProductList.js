import ProductItem from "./ProductItem" 
import { Flxii, Row } from "../Styles";
import {useState} from  "react"
import SearchBar from "./SearchBar";
import {Route} from "react-router"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductList =(props )=>{
  const  [query, setQuery] = useState("");
  const products = useSelector((state)=>state.products)

 let descr =
products.filter((product) => product.name.includes(query)).map((product)=> 
  <ProductItem product={product} key={product.id} 
 />
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