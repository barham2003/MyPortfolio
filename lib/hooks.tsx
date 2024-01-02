import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HackerTextEffect = ({
  children,
  intervalDuration = 2,
  glitchProbability = 0.05,
  className,
}: any) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      const randomChar =
        Math.random() < glitchProbability
          ? String.fromCharCode(Math.floor(Math.random() * 94) + 33)
          : children[index];

      const newText = text.slice(0, index) + randomChar + text.slice(index + 1);
      setText(newText);

      index = (index + 1) % children.length;
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [text, children, intervalDuration, glitchProbability]);

  return (
    <motion.span
      style={{
        fontFamily: "monospace",
        whiteSpace: "pre",
        overflow: "hidden",
        fontWeight: "bold",
      }}
      className={className}
    >
      {text}
    </motion.span>
  );
};
