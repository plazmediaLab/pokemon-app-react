import React, { useState, useEffect, useRef, Fragment } from "react";
import pokeball from "./img/pokemon.svg";
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
import axios from "axios";

function App() {
  // Local STATE
  const [ac, setAC] = useState({
    primary: "",
    secondary: "",
    tertiary: "",
  });
  const [bc, setBC] = useState({
    primary: "#777777",
    secondary: "#000000",
    tertiary: "#ee5281",
  });
  const [pokeresponse, setPokeResponse] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [imgurl, setImgUrl] = useState("");

  // Refs
  const CanvasRef = useRef(null);

  // useAffect
  useEffect(() => {
    setAC({
      primary: "#ee5281",
      secondary: "#777777",
      tertiary: "#000000",
    });
    if (Object.keys(pokemon).length > 0) {
      setImgUrl(pokemon.sprites.front_default);
    }
    if (imgurl.trim() !== "") {
      renderPokemon(CanvasRef, imgurl);
    }
    // eslint-disable-next-line
  }, [pokemon, imgurl]);

  // Get CANVAS DATA
  const renderPokemon = (canvas_arg, img_arg) => {
    let canvas = canvas_arg.current,
      context = canvas.getContext("2d"),
      imgObject = new Image();

    imgObject.setAttribute("crossOrigin", "anonymous");
    imgObject.src = img_arg;
    imgObject.addEventListener("load", () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imgObject, 0, 0, canvas.width, canvas.height);
      const colorPalette = getColorPalette(canvas, context);
      // console.log(colorPalette);
      setBC({
        primary: `rgb(${colorPalette[0].red}, ${colorPalette[0].green}, ${colorPalette[0].blue})`,
        secondary: `rgb(${colorPalette[1].red}, ${colorPalette[1].green}, ${colorPalette[1].blue})`,
        tertiary: `rgb(${colorPalette[2].red}, ${colorPalette[2].green}, ${colorPalette[2].blue})`,
      });
    });
  };

  // Get colors from image
  const getColorPalette = (cnv_arg, ctx_arg) => {
    const imgData = ctx_arg.getImageData(0, 0, cnv_arg.width, cnv_arg.height)
      .data;
    const quality = 90;
    const colors = [];

    for (let i = 0; i < cnv_arg.width * cnv_arg.height; i = i + quality) {
      const offset = i * 4;
      const alpha = imgData[offset + 3];
      if (alpha > 0) {
        const red = imgData[offset];
        const green = imgData[offset + 1];
        const blue = imgData[offset + 2];
        colors.push({ red, green, blue });
        // console.log("%c Color ", `background: rgba(${red}, ${green}, ${blue})`);
      }
    }

    return colors;
  };

  const handleChange = (e) => {
    setPokeResponse(e.target.value);
  };

  const handleResponse = async (e) => {
    e.preventDefault();

    if (pokeresponse.trim() === "") {
      return;
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeresponse}/`;

    const request = await axios.get(url);
    const response = await request.data;

    setPokemon(response);
  };

  return (
    // <Main theme={color}>
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

      <Main className="main">
        <div className="gradiant"></div>

        <Palette>
          <div className="primary"></div>
          <div className="secondary"></div>
          <div className="tertiary"></div>
        </Palette>

        <ActionForm onSubmit={handleResponse}>
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
