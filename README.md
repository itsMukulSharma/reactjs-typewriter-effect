# reactjs-typewriter-effect

A customizable React component that creates a typewriter effect for a given set of words.

## Features

- Types out words character by character
- Deletes words character by character
- Customizable typing, deleting, and pause intervals
- Option to loop through words or stop at the end
- Pauses on hover
- Customizable text color and cursor style

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
      />
    </div>
  );
};

export default ComponentName;
```

![image](https://github.com/user-attachments/assets/e5183770-c9a6-4546-b412-9604b6ca48b5)

