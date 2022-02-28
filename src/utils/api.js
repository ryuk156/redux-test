export const getProducts = async (URL) => {
  let res = await fetch(URL);

  let products = await res.json();

  return products;
};
