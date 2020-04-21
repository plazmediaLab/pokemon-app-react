import React from "react";
import styled from "@emotion/styled";

const MessageComp = styled.p`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #eceb44;
  margin: 0;
  padding: 1.1rem 1rem;
  text-align: center;
  box-shadow: 0 5px 10px -1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  color: #777;

  span {
    font-weight: 600;
  }
`;

const NoResults = ({ id_arg }) => {
  return (
    <MessageComp>
      No result was found with name or id: <span>{id_arg}</span>
    </MessageComp>
  );
};

export default NoResults;
