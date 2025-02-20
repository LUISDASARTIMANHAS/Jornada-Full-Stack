export const convertStringTimeToSeconds = (stringTime) => {
  const colonPosition = stringTime.indexOf(":");
  const minutes = Number(stringTime.substring(0, colonPosition));
  const seconds = Number(stringTime.substring(colonPosition + 1));

  return minutes * 60 + seconds;
};
