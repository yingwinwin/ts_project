export const cleanObj = (object: object) => {
  let result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = object[key];
    if (!value.toString()) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
