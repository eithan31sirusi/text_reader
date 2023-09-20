// TextReaderStyled.js
import styled from "styled-components";

export const Container = styled.div`
  background-color: #e0d3af; // A color reminiscent of old paper
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1); // A soft shadow for depth
`;

export const TextArea = styled.textarea`
  width: 50%;
  height: 200px;
  padding: 10px;
  border: 1px solid #b5a895; // A soft brown border
  border-radius: 5px;
  resize: none;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #b5a895; // A soft brown color
  color: white;
  padding: 10px 20px;
  margin: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #9c8b76; // A slightly darker brown on hover
  }
`;

export const Dropdown = styled.select`
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 3px 3px 6px #b8b8b8, -3px -3px 6px #ffffff;
  appearance: none; // Removes default appearance
  font-size: 16px;
  margin: 1rem;
  text-align: center;
  option {
    background-color: #f0f0f0;
    padding: 10px;
  }

  &:hover {
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
  }
`;

export const SpeakButton = styled(Button)`
  // Extending the previous Button styles
  background: ${(props) =>
    props.background || "linear-gradient(145deg, #757575, #9e9e9e)"};
  box-shadow: 3px 3px 6px #6c6c6c, -3px -3px 6px #a6a6a6;
  margin: ${(props) => props.margin || "auto"};
  min-width: 5.5rem;
  min-height: 5.5rem;
  border-radius: 50%;

  &:hover {
    background: linear-gradient(145deg, #9e9e9e, #757575);
  }
`;

export const SpeedRange = styled.input.attrs({ type: "range" })`
  appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  outline: none;
  padding: 0;
  margin: 20px 0;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(145deg, #757575, #9e9e9e);
    cursor: pointer;
    box-shadow: 3px 3px 6px #6c6c6c, -3px -3px 6px #a6a6a6;
    transition: background 0.3s;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(145deg, #757575, #9e9e9e);
    cursor: pointer;
    box-shadow: 3px 3px 6px #6c6c6c, -3px -3px 6px #a6a6a6;
    transition: background 0.3s;
  }

  &:hover::-webkit-slider-thumb {
    background: linear-gradient(145deg, #9e9e9e, #757575);
  }

  &:hover::-moz-range-thumb {
    background: linear-gradient(145deg, #9e9e9e, #757575);
  }
`;

// Add styles for other elements like dropdown and range input
