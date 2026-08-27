import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
}

export function useTypewriter({
  text,
  speed = 38,
  startDelay = 600,
}: UseTypewriterOptions) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let typingInterval: ReturnType<typeof setInterval> | undefined;

    const delayTimer = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (index < text.length) {
          index++;
          setDisplayed(text.slice(0, index));
        } else {
          setDone(true);
          if (typingInterval) clearInterval(typingInterval);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
