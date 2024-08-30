import React from "react";

const RenderTypewriter = (text, styles) => {
  if (!styles || styles.length === 0) {
    return text;
  }

  return styles.reduce((acc, style) => {
    const { start, end, ...styleProps } = style;
    const before = acc.slice(0, start);
    const styled = (
      <span key={start} style={styleProps}>
        {acc.slice(start, end)}
      </span>
    );
    const after = acc.slice(end);
    return [before, styled, after];
  }, text);
};

export default RenderTypewriter;
