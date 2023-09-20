import React, { useState, useEffect } from "react";
import { FlexContainer } from "./FlexContainerStyled";
import {
  Container,
  TextArea,
  Dropdown,
  SpeakButton, // This is the Play/Resume button, but we're keeping the styled component name for simplicity.
  SpeedRange,
  // ... other styled components
} from "./TextReaderStyled";
import SVGContainer from "./SVGContainer";
import PasueSvg from "./assets/PasueSVG.jsx";

function TextReader() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1);
  const [position, setPosition] = useState(0); // Track the current position in the text
  const [isPaused, setIsPaused] = useState(false); // Track if the speech is paused

  useEffect(() => {
    // Fetch available voices
    const availableVoices = window.speechSynthesis.getVoices();
    setVoices(availableVoices);

    // Listen for the 'voiceschanged' event
    window.speechSynthesis.onvoiceschanged = () => {
      setVoices(window.speechSynthesis.getVoices());
    };
  }, [selectedVoice]);

  const handlePlay = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      handleSpeak();
    }
  };

  const handleResume = () => {
    handleSpeak(0); // Start from the beginning
  };

  const handleSpeak = (startPos = 0) => {
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text.slice(startPos));
    utterance.rate = rate;
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.onboundary = (event) => {
      setPosition(event.charIndex);
    };
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const handleBackward = () => {
    const newPos = Math.max(position - 30, 0); // Go back by 30 characters
    handleSpeak(newPos);
  };

  const handleForward = () => {
    const newPos = Math.min(position + 30, text.length); // Go forward by 30 characters
    handleSpeak(newPos);
  };

  return (
    <Container>
      <FlexContainer align="center" justify="flex-start" direction="column">
        {" "}
        <h2>Eithan Text Reader</h2>
        <TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to read..."
        ></TextArea>
        <div>
          <label>
            <Dropdown
              value={selectedVoice ? selectedVoice.name : ""}
              onChange={(e) => {
                const voice = voices.find((v) => v.name === e.target.value);
                setSelectedVoice(voice);
                handleResume();
              }}
            >
              {voices.map((voice, index) => (
                <option key={index} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </Dropdown>
          </label>
        </div>
        <div>
          <label>
            <SpeedRange
              type="range"
              min="0.5"
              max="2"
              step="0.3"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            {rate}
          </label>
        </div>
        <FlexContainer>
          <SpeakButton margin="1rem" onClick={handleBackward}>
            Backward
          </SpeakButton>
          <SpeakButton margin="1rem" onClick={handlePause}>
            Pause
          </SpeakButton>
          <SpeakButton margin="1rem" onClick={handlePlay}>
            Play
          </SpeakButton>
          <SpeakButton margin="1rem" onClick={handleResume}>
            Resume
          </SpeakButton>
          <SpeakButton margin="1rem" onClick={handleForward}>
            Forward
          </SpeakButton>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
}

export default TextReader;
