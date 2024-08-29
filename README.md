# React js Typewriter Effect

A versatile React component that dynamically displays text, simulating a typewriter effect. Users can customize the typing speed, deletion speed, pause duration between words, and the overall looping behavior. The component also provides options for many other CSS properties with Custom Classes.

![reactjs-typewriter-effect-gif](https://github.com/user-attachments/assets/7175b2eb-4b06-40e3-9e49-785b0c39bebd)

## Features

- Types out words character by character
- Deletes words character by character
- Customizable typing, deleting, and pause intervals
- Option to loop through words or stop at the end
- Pauses on hover
- Customizable FontName, size, weight, cursor style and many other CSS properties with Custom classes.

## Installation

Import the component where you want to use it:

```jsx
import React from "react";
import Typewriter from "reactjs-typewriter-effect";

const ComponentName = () => {
  return (
    <div>
      <h1>Welcome to tutorial of reactjs-typewriter-effect</h1>
      <Typewriter
        words={["React Developer", "UI/UX Enthusiast", "Problem Solver"]}
        typingInterval={150}
        deletingInterval={100}
        pauseTime={2000}
        loop={true}
        color="blue"
        cursorStyle="_"
        fontName="Roboto"
        fontSize="24px"
        fontWeight={600}
        textShadow="2px 2px 4px rgba(0,0,0,0.3)"
        lineHeight="1.5"
        customClass="opacity"
      />
    </div>
  );
};

export default ComponentName;
```

## Props

![image](https://github.com/user-attachments/assets/4b05069c-04f3-477a-9481-5d3532e4d3b9)

## Behavior

-The component will type out each word in the words array.
-After typing a word, it will pause for the duration specified by pauseTime.
-It will then delete the word character by character.
-If loop is true, it will move to the next word and repeat the process.
-If loop is false, it will stop after typing and deleting the last word, displaying the first word in the array.
-The animation pauses when the user hovers over the text and resumes when the mouse leaves.

## Customization

You can customize the appearance and behavior of the Typewriter component by adjusting the props. Experiment with different values for **typingInterval**, **deletingInterval**, **pauseTime**, **fontName**, **fontSize**, **fontWeight** and many other **CSS** properties as shown above to achieve the desired effect.
