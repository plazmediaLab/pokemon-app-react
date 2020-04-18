import React from "react";
// Styled Components
import { ControlPanelContainer } from "./StyledComponents";

import logoReact from "../img/logo.svg";
import pokeAPI from "../img/pokemon.svg";
import myLogo from "../img/isotype-filling-color.svg";

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
