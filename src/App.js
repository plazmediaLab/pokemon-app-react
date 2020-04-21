import React, { useState, useEffect, useRef, Fragment } from "react";
import { Global, css } from "@emotion/core";
// Styled components
import {
  Main,
  Palette,
  ActionForm,
  Canvas,
} from "./components/StyledComponents";
// Components
import ControlPanel from "./components/ControlPanel";
import NoResults from "./components/NoResults";
// Images import
import pokeball from "./img/pokemon.svg";
// Services
import reqAPI from "./services/reqAPI";
import Draw from "./services/RenderPokemon";

function App() {
  // Local STATE
  // eslint-disable-next-line
  const [ac, setAC] = useState({
    primary: "#ee5281",
    secondary: "#777777",
    tertiary: "#000000",
  });
  const [bc, setBC] = useState({
    primary: "#777777",
    secondary: "#000000",
    tertiary: "#ee5281",
  });
  const [formpokemon, setFormPokemon] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [req, setReq] = useState(false);
  const [error, setError] = useState(false);

  // Refs
  const CanvasRef = useRef(null);

  // useAffect
  useEffect(() => {
    if (req) {
      const draw = new Draw(CanvasRef);
      if (pokemon.sprites !== undefined) {
        draw.render(pokemon.sprites.front_default, setBC);
        setError(false);
      } else {
        draw.clear();
        setError(true);
        setBC({
          primary: "#777777",
          secondary: "#000000",
          tertiary: "#ee5281",
        });
      }
    }
    // eslint-disable-next-line
  }, [pokemon, req]);

  const handleChange = (e) => {
    setFormPokemon(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setPokemon(await reqAPI(formpokemon));
    setReq(true);
    console.log();
    window.addEventListener("resize", () => {});
  };

  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --palette-primary: ${ac.primary};
            --palette-secondary: ${ac.secondary};
            --palette-tertiary: ${ac.tertiary};
          }

          body:hover .primary,
          body:hover .secondary,
          body:hover .tertiary,
          body:hover .form-input,
          .gradiant {
            --palette-primary: ${bc.primary};
            --palette-secondary: ${bc.secondary};
            --palette-tertiary: ${bc.tertiary};
          }
          body:hover .pokeball {
            opacity: 0;
          }
          body:hover .gradiant {
            opacity: 1;
          }
        `}
      />

      <ControlPanel className="control-panel" />

      {error ? <NoResults id_arg={formpokemon} /> : null}

      <Main className="main">
        <div className="gradiant"></div>

        <Palette>
          <div className="primary"></div>
          <div className="secondary"></div>
          <div className="tertiary"></div>
        </Palette>

        <ActionForm onSubmit={onSubmit}>
          {Object.keys(pokemon).length === 0 ? (
            <h2>Gotta catch´em all!</h2>
          ) : (
            <Canvas ref={CanvasRef} width="100" height="100" />
          )}
          <img className="pokeball" src={pokeball} alt="" />

          <h3>
            {pokemon.name === undefined ? "---" : pokemon.name.toUpperCase()}
          </h3>

          <div className="form-input">
            <input
              type="text"
              placeholder="Write NAME or ID"
              onChange={handleChange}
              name="pokemonSelect"
            />
          </div>
        </ActionForm>
      </Main>
    </Fragment>
  );
}

export default App;
