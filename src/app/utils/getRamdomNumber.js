const getRamdomNumber = (min = 0, max = 0) =>
   Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
   Math.ceil(min);

export default getRamdomNumber;
