export const formatTimeInSeconds = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const formatedMinutes = minutes.toString().padStart(2, "0");
  const formatedSeconds = seconds.toString().padStart(2, "0");

  return `${formatedMinutes}:${formatedSeconds}`;
};
