import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1> Footer</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color:#000;
  text-align:center;

  .h1{
    color:#fff;
  }
`

export default Footer;
