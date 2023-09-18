import getRandomNumber from "./getRandomNumber";

const getRandomImage = () => `https://picsum.photos/${getRandomNumber(1, 999)}`;

export default getRandomImage;