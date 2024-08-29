import React, { useState, useEffect } from "react";

const Typewriter = ({
  words,
  typingInterval = 150,
  deletingInterval = 50,
  pauseTime = 100,
  loop = true,
  color = "inherit",
  cursorStyle = "|",
  fontName,
  fontSize,
  fontWeight,
  textShadow,
  lineHeight,
  customClass,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (fontName) {
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css?family=${fontName.replace(
        " ",
        "+"
      )}`;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, [fontName]);

  useEffect(() => {
    if (isHovered || isFinished) return;

    const word = words[currentWordIndex];
    let timer;

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting) {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length - 1));
        }, deletingInterval);
      } else {
        setIsDeleting(false);
        if (loop) {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        } else if (currentWordIndex < words.length - 1) {
          setCurrentWordIndex(currentWordIndex + 1);
        } else {
          setIsFinished(true);
          setCurrentText(words[0]);
        }
      }
    } else {
      if (currentText.length < word.length) {
        timer = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length + 1));
        }, typingInterval);
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    isPaused,
    isHovered,
    isFinished,
    currentWordIndex,
    words,
    typingInterval,
    deletingInterval,
    pauseTime,
    loop,
  ]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const typewriterStyle = {
    color,
    fontFamily: fontName,
    fontSize,
    fontWeight,
    textShadow,
    lineHeight,
  };

  return (
    <span
      style={typewriterStyle}
      className={customClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {currentText}
      <span
        id="cursor"
        className="cursor"
        style={{ opacity: "0.7", animation: "blink 0.7s infinite" }}
      >
        {cursorStyle}
      </span>
    </span>
  );
};

export default Typewriter;
