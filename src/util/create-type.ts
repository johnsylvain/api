export const createType = <T extends object>(name: string, obj: T): string => {
  const keys = Object.keys(obj);
  const keyType = (value: string, isArray: boolean) => {
    const type =
      typeof value === "string"
        ? "String"
        : Number.isInteger(value)
        ? "Int"
        : "Float";
    return isArray ? `[${type}]` : type;
  };

  const determineType = (key: string) =>
    Array.isArray(obj[key])
      ? keyType(obj[key][0], true)
      : keyType(obj[key], false);

  const types = keys.map(key => `  ${key}: ${determineType(key)}`).join("\n");

  return [`type ${name} {`, types, "}"].join("\n");
};
