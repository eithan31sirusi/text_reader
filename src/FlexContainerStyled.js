// FlexContainerStyled.js
import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${(props) => props.align || "center"}; // Vertical alignment
  justify-content: ${(props) =>
    props.justify || "center"}; // Horizontal alignment
  flex-direction: ${(props) =>
    props.direction || "row"}; // Direction of the flex items
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "auto"};
`;
