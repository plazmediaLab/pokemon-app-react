import React from "react";
// @emotion Styled component Import
import styled from "@emotion/styled";
// Images import
import logoReact from "../img/logo.svg";
import pokeAPI from "../img/pokemon.svg";
import myLogo from "../img/isotype-filling-color.svg";

const ControlPanelContainer = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 30px;
  border: 4px solid #555;
  background-color: #fff;
  opacity: 0.5;
  transition: opacity 0.3s;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-auto-flow: column;
  gap: 1rem;
  padding: 0.5rem;

  &:hover {
    opacity: 1;
    -webkit-box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15),
      0px 1px 3px 1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.15),
      0px 1px 3px 1px rgba(0, 0, 0, 0.3);
  }

  > * {
    margin: 0;
    padding: 0;
  }
  a {
    white-space: nowrap;
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover label {
      display: inline-block;
      cursor: pointer;
    }
  }
  label {
    color: #999;
    font-weight: 600;
    display: none;
    transition: all 1s;
  }
  .react,
  .pokeapi,
  .plazmedia {
    width: auto;
    height: 30px;
    display: inline-block;
  }
  .pokeapi {
    padding-right: 0.5rem;
  }
  .react {
    animation: spin-r 4.5s linear infinite;
  }
  @keyframes spin-r {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media (max-width: 786px) {
    grid-auto-flow: row;
    padding: 0.5rem 0;

    .react,
    .pokeapi,
    .plazmedia {
      width: 100%;
      margin: 0 auto;
    }
    .pokeapi {
      padding-right: 0;
    }
    a {
      width: 40px;
    }
    a:hover label {
      display: none;
    }
  }
`;

const ControlPanel = () => {
  return (
    <ControlPanelContainer>
      {/* <p>v1.0.1</p> */}
      <a
        href="https://create-react-app.dev/"
        target="_blank"
        rel="noopener noreferrer"
        title="Create React APP"
      >
        <img src={logoReact} alt="" className="react" />
        <label>Create react app</label>
      </a>
      <a
        href="https://pokeapi.co/"
        target="_blank"
        rel="noopener noreferrer"
        title="PokeAPI"
      >
        <img src={pokeAPI} alt="" className="pokeapi" />
        <label>PokeAPI</label>
      </a>
      <a
        href="https://plazmedia.com.mx/"
        target="_blank"
        rel="noopener noreferrer"
        title="Plazmedia"
      >
        <img src={myLogo} alt="" className="plazmedia" />
        <label>Plazmedia</label>
      </a>
    </ControlPanelContainer>
  );
};

export default ControlPanel;
