const loginPageQuotes = [
  "Every second counts. Make yours matter.",
  "Turn time into progress.",
  "Focus. Analyze. Achieve.",
  "Small steps. Measurable impact.",
  "Track time. Master productivity.",
  "What gets measured, gets improved.",
  "Own your hours, own your outcome.",
  "Time doesn’t wait, optimize it.",
  "Work smarter, not longer.",
  "Precision in time is power in progress.",
];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * loginPageQuotes.length);
  return loginPageQuotes[randomIndex];
};
