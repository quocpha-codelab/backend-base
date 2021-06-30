export const getAllValuesEnum = (enumVar: any): any[] => {
  const keysAndValues = Object.values(enumVar);
  const values = [];

  keysAndValues.forEach((keyOrValue: any) => {
    if (isNaN(Number(keyOrValue))) {
      values.push(enumVar[keyOrValue] || keyOrValue);
    }
  });

  return values;
};
