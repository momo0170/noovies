export const makeImgPath = (img, width = 'w500') => {
  return `https://image.tmdb.org/t/p/${width}${img}`;
};
