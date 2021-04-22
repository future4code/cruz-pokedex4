import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeaderPage>
      {props.button}
      {props.title}
      {props.button2}
    </HeaderPage>
  );
};

export default Header;

const HeaderPage = styled.header`
  height: 60px;
  background: #d92525;
  width: 100%;
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;

  button:first-child {
    position: absolute;
    left: 20px;
  }

  button:last-child {
    position: absolute;
    right: 20px;
  }
`;
