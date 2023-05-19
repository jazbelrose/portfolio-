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

  // Jumble the initial strings
  const jumbledStrings = strings.map((string) => jumbleLetters(string));

  // Update the options to use the jumbled strings
  const updatedOptions = {
    ...options,
    strings: jumbledStrings,
    onStringTyped: (arrayPos, self) => {
      // Jumble the next string when it starts typing
      const nextString = self.strings[arrayPos + 1];
      if (nextString) {
        self.strings[arrayPos + 1] = jumbleLetters(nextString);
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
