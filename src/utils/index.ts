const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const cleanObj = (object: { [key: string]: unknown }) => {
  let result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = object[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
