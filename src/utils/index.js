export const cleanObj = (object) => {
  let result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = object[key];
    if (!value.toString()) {
      delete result[key];
    }
  });
  return result;
};
