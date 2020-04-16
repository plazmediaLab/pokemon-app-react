import React, { useState } from 'react';
import logo from './img/logo.svg';
// Styled components
import { Main, Palette, ActionButton } from './components/StyledComponents';

function App() {

  // Local STATE
  const [colors, setColors] = useState({
    primary: '#efe782',
    secondary: '#de782e',
    tertiary: '#d53d30',
  });
  const { primary, secondary, tertiary } = colors; 

  console.log(colors);

  const onBlusrEvent = () => {
    console.log('Item hover');
  };

  return (

      // <Main theme={color}>
      <Main 
        colors={colors}
        onMouseOver={onBlusrEvent}
      >

        <Palette
          colors={colors}
        >
          <div className="primary"></div>
          <div className="secondary"></div>
          <div className="tertiary"></div>
        </Palette>

        <ActionButton>Vamo'a calmarno</ActionButton>

      </Main>

  );
}

export default App;
