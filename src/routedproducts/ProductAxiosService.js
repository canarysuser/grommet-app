import API, {productUrl} from "./AxiosInstance";

export async function getAllProducts() {
    let response = (await API.get(productUrl)).data; 
    return response;
}
export async function getProductDetails(productId) { 
    let response=(await API.get(`${productUrl}/${productId}`)).data;
    return response;
}
export async function createProductInDb(productObj) { 
    productObj.discontinued = productObj.discontinued=='on'?true:false;
    let response = await API.post(productUrl, productObj);
    return response.data;
}
export async function updateProductToDb(productObj) { 
    let response = await API.put(`${productUrl}/${productObj.productId}`, productObj);
    return response.data;
}


