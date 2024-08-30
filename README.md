# React js Typewriter Effect

A versatile React component that dynamically displays text, simulating a typewriter effect. Users can customize the typing speed, deletion speed, pause duration between words, and the overall looping behavior. The component also supports custom styling for specific portions of text and provides options for many other CSS properties with custom classes.

## Features

- Types out words character by character
- Deletes words character by character
- Customizable typing, deleting, and pause intervals
- Option to loop through words or stop at the end
- Pauses on hover
- Supports custom styling for specific portions of text
- Customizable font name, size, weight, color, and text shadow
- Customizable cursor style
- Allows setting custom CSS classes for additional styling
- Automatically loads custom fonts from Google Fonts when specified

## Installation

You can install React jsTypewriter Effect with just one command and you're good to go

```shell

# with npm
npm i reactjs-typewriter-effect

# with yarn
yarn add reactjs-typewriter-effect

```

## Word Object Structure

Each object in the `words` array should have the following structure:

```javascript
{
  text: string,
  styles: [
    {
      start: number,
      end: number,
      ...cssProperties
    },
    // ... more style objects
  ]
}
```

- `text`: The string to be typed.
- `styles`: An array of style objects, each defining a styled section of the text.
- `start`: The starting index of the styled section.
- `end`: The ending index of the styled section.
- `...cssProperties`: Any valid CSS properties to apply to the styled section.

## Usage

Import the component where you want to use it:

```jsx
import React from "react";
import Typewriter from "reactjs-typewriter-effect";

const ComponentName = () => {
  return (
    <div>
      <h1>Welcome to tutorial of reactjs-typewriter-effect</h1>
      <Typewriter
        words={[
          { text: "Welcome to my portfolio!", styles: [] },
          {
            text: "I'm a full-stack developer",
            styles: [{ start: 6, end: 24, color: "blue", fontWeight: "bold" }],
          },
          {
            text: "Specializing in React and Node.js",
            styles: [
              { start: 16, end: 21, color: "cyan" },
              { start: 26, end: 33, color: "green" },
            ],
          },
        ]}
        typingInterval={150}
        deletingInterval={100}
        pauseTime={200}
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

This example will create a typewriter effect that cycles through three phrases, with custom styling applied to specific words or sections.

## Props

| Prop               | Type             | Default   | Description                                                                                                                                |
| ------------------ | ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `words`            | Array of Objects | Required  | An array of word objects to be typed. Each object should have a `text` property (string) and a `styles` property (array of style objects). |
| `typingInterval`   | Number           | 150       | The interval (in milliseconds) between typing each character.                                                                              |
| `deletingInterval` | Number           | 50        | The interval (in milliseconds) between deleting each character.                                                                            |
| `pauseTime`        | Number           | 100       | The time (in milliseconds) to pause after completing a word before starting to delete it.                                                  |
| `loop`             | Boolean          | true      | Whether to loop through the words array continuously.                                                                                      |
| `color`            | String           | 'inherit' | The default text color for the typewriter text.                                                                                            |
| `cursorStyle`      | String           | '\|'      | The character or string to use as the cursor.                                                                                              |
| `fontName`         | String           | undefined | The name of the font to use for the typewriter text. If provided, it will be loaded from Google Fonts.                                     |
| `fontSize`         | String           | undefined | The font size for the typewriter text.                                                                                                     |
| `fontWeight`       | String or Number | undefined | The font weight for the typewriter text.                                                                                                   |
| `textShadow`       | String           | undefined | The text shadow CSS property for the typewriter text.                                                                                      |
| `lineHeight`       | String or Number | undefined | The line height for the typewriter text.                                                                                                   |
| `customClass`      | String           | undefined | A custom CSS class to apply to the typewriter component.                                                                                   |

## Behavior

- The component will type out each word in the words array.
- After typing a word, it will pause for the duration specified by pauseTime.
- It will then delete the word character by character.
- If loop is true, it will move to the next word and repeat the process.
- If loop is false, it will stop after typing and deleting the last word, displaying the first word in the array.
- The animation pauses when the user hovers over the text and resumes when the mouse leaves.

## Customization

You can customize the appearance and behavior of the Typewriter component by adjusting the props. Experiment with different values for **typingInterval**, **deletingInterval**, **pauseTime**, **fontName**, **fontSize**, **fontWeight** and many other **CSS** properties as shown above to achieve the desired effect.
