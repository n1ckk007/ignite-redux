import React from "react";

import logo from "../../img/logo.svg";
import { Logo, StyledNav } from "./NavStyles";

const Nav = () => {
  return (
    <div>
      <StyledNav>
        <Logo>
          <img src={logo} alt="logo" />
          <h1>Ignite</h1>
        </Logo>
        <div className="search">
          <input type="text" />
          <button>Search</button>
        </div>
      </StyledNav>
    </div>
  );
};

export default Nav;
