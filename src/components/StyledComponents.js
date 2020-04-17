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
  }
  &:hover .gradiant{
    opacity: 1;
  }
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

export const ActionForm = styled.form`
  width: min-content;
  display: block;
  display: flex;
  flex-direction: column;

  .form-input{
    position: relative;
  }
  .form-input::after{
    z-index: -1;
    position: absolute;
    content: '';
    top: -5px;
    left: -5px;
    transition: background 1s ease-in-out;
    background: var(--palette-primary);
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    clip-path: 
      polygon(
        7% 0,     100% 0,
        100% 0,   100% 65%,
        93% 100%, 0 100%,
        0 100%,   0 35%
      );
  }
  img{
    width: 100px;
    height: 100px;
    margin: 0 auto 3rem;
    display: block;
  }
  input{
    text-align: center;
    width: 300px;
    overflow: visible;
    border: none; 
    overflow: visible;
    background: #fff;
    transition: background 1s ease-in-out;
    clip-path: 
      polygon(
        7% 0,     100% 0,
        100% 0,   100% 55%,
        93% 100%, 0 100%,
        0 100%,   0 40%
      );
  }
`;

export const Canvas = styled.canvas`
  width: 100px;
  height: 100px;
  /* background-color: red; */
  margin: 0 auto 3rem;
`;