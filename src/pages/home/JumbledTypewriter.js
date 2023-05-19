import React from "react";
import Typewriter from "typewriter-effect";

const JumbledTypewriter = ({ strings, options }) => {
  const jumbleLetters = (text) => {
    // Convert the text into an array of characters
    const characters = text.split("");
    // Jumble the order of the characters
    const jumbledCharacters = characters.sort(() => Math.random() - 0.5);
    // Join the jumbled characters back into a string
    const jumbledText = jumbledCharacters.join("");
    return jumbledText;
  };

  // Update the options to use the jumbled strings
  const updatedOptions = {
    ...options,
    strings: strings,
    onStringTyped: (arrayPos, self) => {
      // Jumble the current string and start backspace effect
      const currentString = self.strings[arrayPos];
      if (currentString) {
        self.strings[arrayPos] = jumbleLetters(currentString);
        self.backspace();
      }
      // Call the original onStringTyped callback if provided
      if (options.onStringTyped) {
        options.onStringTyped(arrayPos, self);
      }
    },
  };

  return <Typewriter options={updatedOptions} />;
};

export default JumbledTypewriter;
