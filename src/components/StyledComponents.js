import styled from '@emotion/styled';

export const Main = styled.div`
  position: relative;
  z-index: 20;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: 100px 1fr;
  align-items: center;
  justify-items: center; 
  background: 
    linear-gradient(var(--palette-primary), transparent),
    linear-gradient(90deg, var(--palette-secondary), transparent),
    linear-gradient(-90deg, var(--palette-tertiary), transparent);

  /* background-color: ${props => props.theme}; */

  /* &:hover{
    --palette-primary: #90cfb3;
    --palette-secondary: #327258;
    --palette-tertiary: #b64455;
  } */
  .gradiant{
    position: absolute;
    z-index: -1;
    content: '';
    top: 0;
    left: 0;
    background: 
      linear-gradient(var(--palette-primary), transparent),
      linear-gradient(90deg, var(--palette-secondary), transparent),
      linear-gradient(-90deg, var(--palette-tertiary), transparent);
    width: 100vw;
    height: 100vh;
    opacity: 0;
    -webkit-transition: opacity 1s linear;
    -moz-transition: opacity 1s linear;
    -o-transition: opacity 1s linear;
    transition: opacity 1s linear;
    /* display: block; */
  }
  &:hover .gradiant{
    opacity: 1;
  }
  /* &:hover::before{
    opacity: 1;
  } */
`;

export const Palette = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  justify-self: stretch;

  .primary{
    background: var(--palette-primary);
    transition: background 1s ease-in-out;
  }
  .secondary{
    background: var(--palette-secondary);
    transition: background 1s ease-in-out;
  }
  .tertiary{
    background: var(--palette-tertiary);
    transition: background 1s ease-in-out;
  }
`;

export const ActionButton = styled.button`
  padding: 1em 2em;
  font-size: 2rem;
  border: none; 
  clip-path: 
    polygon(10% 0, 100% 0, 100% 0, 100% 65%, 90% 100%, 0 100%, 0 100%, 0 35%);
  overflow: visible;

  &:hover{
    background: #e6e6e6;
    box-shadow: 0px 7px 7px -5px rgba(0,0,0,0.3)!important;
  }
`;