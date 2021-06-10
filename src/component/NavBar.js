import {  Logo, Navig,Nav , ThemeButton } from "../Styles";

const NavBar = (props) => {
  return (
   <Navig>    

              <Logo exact to="/">Home</Logo>
  < Nav to="/products">products</Nav>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>

       </Navig>
  );
};
      
export default NavBar;