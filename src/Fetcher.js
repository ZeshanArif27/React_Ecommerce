const BASE_URL = "http://127.0.0.1:8000/api/";
const fetcher = async (url) => {
  let responeObject = { errormessage: "", data: [] };
  try {
    const responseFetch = await fetch(BASE_URL + url);
    if (!responseFetch.ok) {
      throw new Error(`HTTP Error ${responseFetch.status}`);
    }
    const responseData = await responseFetch.json();
    responeObject.errormessage = "";
    responeObject.data = responseData;
  } catch (error) {
    responeObject.errormessage = error.message;
  }
  return responeObject;
};

export const get_categories = () => {
  return fetcher("categories");
};
export const get_products = (id) => {
  return fetcher("prod/cat_id=" + id);
};
export const getProductsById = (id) => {
  return fetcher("products/" + id);
};
