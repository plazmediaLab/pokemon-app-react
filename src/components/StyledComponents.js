import styled from '@emotion/styled';

export const Main = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: 100px 1fr;
  align-items: center;
  justify-items: center; 

  /* --primary: #efe782;
  --secondary: #de782e;
  --tertiary: #d53d30; */

  /* background-color: ${props => props.theme}; */
  background: 
    linear-gradient(${props => props.colors.primary}, transparent),
    linear-gradient(90deg, ${props => props.colors.secondary}, transparent),
    linear-gradient(-90deg, ${props => props.colors.tertiary}, transparent);
  transition: 
    ${props => props.colors.primary} 1s,
    ${props => props.colors.secondary} 1s,
    ${props => props.colors.tertiary} 1s;

    :hover{
      --primary: #90cfb3;
      --secondary: #327258;
      --tertiary: #b64455;
    }
`;

export const Palette = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  justify-self: stretch;

  .primary{
    background-color: ${props => props.colors.primary};
  }
  .secondary{
    background-color: ${props => props.colors.secondary};
  }
  .tertiary{
    background-color: ${props => props.colors.tertiary};
  }
`;

export const ActionButton = styled.button`
  position: relative;
  padding: 1em 2em;
  font-size: 2rem;
  border: none; 
  clip-path: 
    polygon(10% 0, 100% 0, 100% 0, 100% 65%, 90% 100%, 0 100%, 0 100%, 0 35%);
  overflow: visible;
  z-index: 20;

  :hover{
    background: #e6e6e6;
    box-shadow: 0px 7px 7px -5px rgba(0,0,0,0.3)!important;
  }
`;