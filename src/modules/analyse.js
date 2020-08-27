const analyze = (array) => {
  const obj = {
    average: array.reduce((sum, current) => sum + current, 0) / array.length,
    min: array.slice().sort((a, b) => a - b)[0],
    max: array.slice().sort((a, b) => b - a)[0],
    length: array.length,
  };
  return obj;
};

export default analyze;