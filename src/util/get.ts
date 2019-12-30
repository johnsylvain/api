import fetch from "node-fetch";

export const get = async (url: string) => {
  const response = await fetch(url, {});
  return await response.json();
};
