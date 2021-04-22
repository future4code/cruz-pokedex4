import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  width: 100%;
  height: 100vh;
`;

const PhotoContainer = styled.div`
  & > div:nth-child(1) {
    display: flex;
    background-color: pink;
    height: 220px;
    margin: 50px;
    width: 220px;
  }

  & > div:nth-child(2) {
    display: flex;
    background-color: pink;
    height: 220px;
    margin: 50px;
    width: 220px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  background-color: red;
  justify-content: center;

  margin: 20px;
`;

const TypeMovesContainer = styled.div`
  & > div:nth-child(1) {
    background-color: yellow;
    height: 100px;
    margin: 20px;
  }

  & > div:nth-child(2) {
    background-color: brown;
    height: 500px;
    margin: 20px;
  }
`;

const DetailsPage = () => {
  return (
    <>
      <Header />
      <GridContainer>
        <PhotoContainer>
          <div>
            <p>Oi lindaa</p>
            <img />
          </div>
          <div>
            <img />
          </div>
        </PhotoContainer>
        <StatsContainer>
          <h1>Estatísticas</h1>
          <div></div>
        </StatsContainer>
        <TypeMovesContainer>
          <div></div>
          <div></div>
        </TypeMovesContainer>
      </GridContainer>
    </>
  );
};

export default DetailsPage;
