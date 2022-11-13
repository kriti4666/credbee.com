import React, {useContext} from "react";
import {Link} from "react-router-dom";
import logoCred from "./images/credLogo.png";
import "./navbar.css";
import Pricing from "./pricing";
import Product from "./product";
import UnderCons from "./underCons";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {AuthContext} from "../GlobalContext/AuthContext";

export function Navbar() {
  const {isAuth} = useContext(AuthContext);
  console.log(isAuth);
  return (
    <div className="NavbarDiv">
      <div className="firstHalf">
        <div className="LogoDiv">
          <Link to="/">
            <img src={logoCred} alt="credLogo" />
          </Link>
        </div>
        <div className="more">
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{bg: "gray.400"}}
              _expanded={{bg: "blue.400"}}
              _focus={{boxShadow: "outline"}}
            >
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/Product">Product</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Pricing">Pricing</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Solution">Solution</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Customers">Custumers</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Partners">Partners</Link>
              </MenuItem>

              <MenuDivider />
              <MenuItem>English</MenuItem>
              <MenuItem>
                <Link to="/Login">{isAuth ? "Logout" : "Login"}</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Demo">Get a Demo</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="Navcontent">
          <div className="dropdown">
            <span>
              <Link to="/product">Products</Link>
            </span>
            <div className="dropdown-content">
              <Product />
            </div>
          </div>
          <div className="dropdown">
            <span>
              <Link to="/pricing">Pricing</Link>
            </span>
          </div>
          <div className="dropdown">
            <span>
              <Link to="/Solution">Solution</Link>
            </span>
            <div className="dropdown-content">
              <Pricing />
            </div>
          </div>
          <div className="dropdown">
            <span>
              <Link to="/Customers">Customers</Link>
            </span>
          </div>
          <div className="dropdown">
            <span>Resources</span>
            <div className="dropdown-content">
              <UnderCons />
            </div>
          </div>
          <div className="dropdown">
            <span>
              <Link to="/Partners">Partners</Link>
            </span>
            <div className="dropdown-content">
              <p>Hello World!</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="moreImg">
                <img src={ more}/>
            </div> */}
      <div className="secondHalf">
        <div>
          <div className="dropdown">
            <span>English</span>
          </div>
          <div className="dropdown">
            <span>
              <Link to="./Login">{isAuth ? "Logout" : "Login"}</Link>
            </span>
          </div>
          <div className="dropdown">
            <button>
              <Link to="/Demo">Get a demo</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
