import React, { useState } from "react";
import {ThemeProvider} from "styled-components"
import { Head,GlobalStyle} from "./Styles"
import ProductList from "./component/ProductList"
import {Switch,Route } from "react-router"
import Home from "./component/Home"
import './App.css';
import products from "./products";
import ProductDetail from "./component/ProductDetail"


import NavBar from "./component/NavBar";


const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};


function App() {

  const  [_products , setProduct  ] = useState(products );



const  [currentProduct, setCurrentProduct] = useState(null);
const [currentTheme, setCurrentTheme] = useState("light");

const toggleTheme = () =>
setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (    <ThemeProvider theme={theme[currentTheme]}>

    
  
      <GlobalStyle/>
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Head>
      <Switch>
      <Route exact path="/products/:productSlug">
  <ProductDetail products = {_products}
/>

</Route>
<Route exact path="/products">
<ProductList setCurrentProduct={setCurrentProduct }
/>

</Route>

      <Route exact path="/">
      <Home/>  

      </Route>



 </Switch>

      </Head>
           

      </ThemeProvider>
  );
}

export default App;
