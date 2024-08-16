// components/AnimatedNumbersWrapper.jsx
import React, { useEffect, useRef } from "react";

const AnimatedNumbersWrapper = ({ value }) => {
  const AnimatedNumbers = require("react-animated-numbers").default; // Import dynamically

  const animatedRef = useRef(null);

  useEffect(() => {
    if (animatedRef.current) {
      const parsedValue = parseInt(value.replace(/,/g, ""));
      animatedRef.current.setAnimatedValue(parsedValue);
    }
  }, [value]);

  return (
    <AnimatedNumbers
      ref={animatedRef}
      includeComma
      animateToNumber={0} // Initial value, will be updated in useEffect
      locale="en-US"
      className="text-white text-4xl font-bold"
      configs={(_, index) => {
        return {
          mass: 1,
          friction: 100,
          tensions: 140 * (index + 1),
        };
      }}
    />
  );
};

export default AnimatedNumbersWrapper;
