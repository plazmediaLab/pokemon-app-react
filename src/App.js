import React, { useState, useEffect, useRef, Fragment } from 'react';
import logo from './img/logo.svg';
import pokeball from './img/pokemon.svg';
import { Global, css } from '@emotion/core';
// Styled components
import { Main, Palette, ActionForm, Canvas } from './components/StyledComponents';
import axios from 'axios';

function App() {

  // Local STATE
  const [ac, setAC] = useState({
    primary: '#efe782',
    secondary: '#de782e',
    tertiary: '#d53d30',
  });
  const [bc, setBC] = useState({
    primary: '#90cfb3',
    secondary: '#327258',
    tertiary: '#b64455',
  });
  const [pokeresponse, setPokeResponse] = useState('');
  const [pokemon, setPokemon] = useState({});
  const [imgurl, setImgUrl] = useState('');

  // Refs
  const CanvasRef = useRef(null);



  // useAffect
  useEffect(() => {

    if(Object.keys(pokemon).length > 0){
      setImgUrl(pokemon.sprites.front_default);
    }
    if(imgurl.trim() !== ''){
      renderPokemon(CanvasRef, imgurl);
    }
    

  }, [pokemon, imgurl]);


  // Get CANVAS DATA
  const renderPokemon = (canvas_arg, img_arg) => {
    let canvas    = canvas_arg.current,
        context   = canvas.getContext('2d'),
        imgObject = new Image();
    
    imgObject.setAttribute('crossOrigin', 'anonymous');
    imgObject.src = img_arg;
    imgObject.addEventListener('load', () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(imgObject, 0, 0, canvas.width, canvas.height);
    });
  };

  const handleChange = e => {
    setPokeResponse(e.target.value);
  };

  const handleResponse = async e => {
    e.preventDefault();

    if(pokeresponse.trim() === ''){
      return
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeresponse}/`;

    const request = await axios.get(url);
    const response = await request.data

    setPokemon(response);
    
  };

  return (
    // <Main theme={color}>
    <Fragment>
      <Global 
        styles={css`
          :root{
            --palette-primary: ${ac.primary};
            --palette-secondary: ${ac.secondary};
            --palette-tertiary: ${ac.tertiary};
          }

          body:hover .primary,
          body:hover .secondary,
          body:hover .tertiary,
          body:hover .form-input,
          .gradiant{
            --palette-primary: ${bc.primary};
            --palette-secondary: ${bc.secondary};
            --palette-tertiary: ${bc.tertiary};
          }
        `}
      />

      <Main className="main">

        <div className='gradiant'></div>

        <Palette>
          <div className="primary"></div>
          <div className="secondary"></div>
          <div className="tertiary"></div>
        </Palette>

        <ActionForm
          onSubmit={handleResponse}
        >
          {Object.keys(pokemon).length === 0 
            ? <img src={pokeball} alt="" />
            : <Canvas ref={CanvasRef} width="100" height="100"/>
          }

          
          
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
