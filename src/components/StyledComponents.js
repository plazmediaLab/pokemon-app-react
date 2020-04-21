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
