import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../img/logo.svg";
import { fetchSearch } from "../../redux/actions/gamesAction";
import { Logo, StyledNav } from "./NavStyles";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    // access the input text via e.target.value
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    // covers when clicking search button on empty string
    if (textInput) {
      dispatch(fetchSearch(textInput));
      setTextInput("");
    } else {
      dispatch({ type: "CLEAR_SEARCH" });
    }
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <div>
      <StyledNav>
        <Logo onClick={clearSearched}>
          <img src={logo} alt="logo" />
          <h1>Ignite</h1>
        </Logo>
        <form className="search">
          <input onChange={inputHandler} value={textInput} type="text" />
          <button onClick={submitSearch} type="submit">
            Search
          </button>
        </form>
      </StyledNav>
    </div>
  );
};

export default Nav;
