const getResultLevel = (count: number) => {
  if (count === 0) {
    return -1000;
  }

  if (count >= 1 && count <= 3) {
    return 0;
  }

  if (count >= 4 && count <= 6) {
    return 10;
  }

  if (count >= 7 && count <= 9) {
    return 50;
  }

  if (count === 10) {
    return 10000;
  }

  return -1000;
};

export default getResultLevel;
