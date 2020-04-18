import styled from "@emotion/styled";

export const Main = styled.div`
  position: relative;
  z-index: 20;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  align-items: center;
  justify-items: center;
  background: linear-gradient(var(--palette-primary), transparent),
    linear-gradient(90deg, var(--palette-secondary), transparent),
    linear-gradient(-90deg, var(--palette-tertiary), transparent);

  .gradiant {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    background: linear-gradient(var(--palette-primary), transparent),
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

  @media (max-width: 786px) {
    grid-template-rows: 50px 1fr;
  }
`;

export const Palette = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  justify-self: stretch;

  .primary {
    background: var(--palette-primary);
    transition: background 1s ease-in-out;
  }
  .secondary {
    background: var(--palette-secondary);
    transition: background 1s ease-in-out;
  }
  .tertiary {
    background: var(--palette-tertiary);
    transition: background 1s ease-in-out;
  }

  @media (max-width: 786px) {
    grid-template-rows: 50px;
  }
`;

export const ActionForm = styled.form`
  width: min-content;
  display: block;
  display: flex;
  flex-direction: column;

  .form-input {
    position: relative;
  }
  .form-input::after {
    z-index: -1;
    position: absolute;
    content: "";
    top: -5px;
    left: -5px;
    transition: background 1s ease-in-out;
    background: var(--palette-primary);
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    clip-path: polygon(
      7% 0,
      100% 0,
      100% 0,
      100% 65%,
      93% 100%,
      0 100%,
      0 100%,
      0 35%
    );
  }
  img {
    width: 110px;
    height: 110px;
    position: absolute;
    left: calc(50% - 55px);
    transition: opacity 1s;
  }
  h2 {
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.7rem;
    font-weight: 600;
    -webkit-transform: rotate(-20deg);
    transform: rotate(-20deg);
  }
  h3 {
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 2rem 0 !important;
    font-size: 1.8rem;
  }
  h3,
  h2 {
    color: #fff;
    text-shadow: 0px 1px 2px #000000;
  }
  input {
    text-align: center;
    width: 300px;
    overflow: visible;
    border: none;
    overflow: visible;
    background: #fff;
    transition: background 1s ease-in-out;
    clip-path: polygon(
      7% 0,
      100% 0,
      100% 0,
      100% 55%,
      93% 100%,
      0 100%,
      0 100%,
      0 40%
    );
  }
  @media (max-width: 786px) {
    input {
      width: 170px;
    }
  }
`;

export const Canvas = styled.canvas`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

export const ControlPanelContainer = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* width: 30px; */
  /* height: 50px; */
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
