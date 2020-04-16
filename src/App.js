import React, { useState, Fragment } from 'react';
import logo from './img/logo.svg';
import { Global, css } from '@emotion/core';
// Styled components
import { Main, Palette, ActionButton } from './components/StyledComponents';

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

  const onClickFunc = () => {
    setAC(bc)
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
          .main:hover .primary,
          .main:hover .secondary,
          .main:hover .tertiary,
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

        <ActionButton
          onClick={onClickFunc}
        >Vamo'a calmarno</ActionButton>

      </Main>
    </Fragment>

  );
}

export default App;
