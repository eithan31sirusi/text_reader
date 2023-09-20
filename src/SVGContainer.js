import React from "react";
import styled from "styled-components";

const StyledSVGContainer = styled.div`
  display: inline-block;
  width: ${(props) => props.size || "24px"};
  height: ${(props) => props.size || "24px"};
  margin: ${(props) => props.margin || "0"};
  svg {
    width: 100%;
    height: 100%;
  }
`;

function SVGContainer({ svg, size, margin }) {
  return (
    <StyledSVGContainer size={size} margin={margin}>
      {svg}
    </StyledSVGContainer>
  );
}

export default SVGContainer;
