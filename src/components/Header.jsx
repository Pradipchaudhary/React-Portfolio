import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <div className="container ">
        <div className="navbar">
          <NavLink to="/">
            <img src="./logo.png" className="logo" alt="Logo" />
          </NavLink>
          <Navbar />
        </div>
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
    padding: .8rem 4.8rem;
    height: auto;
    background-color: ${({ theme }) => theme.colors.bg};
    
    
    .navbar{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        height: auto;
        max-width: 60%;
      }
    }

  
`;
export default Header;
