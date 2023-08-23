export default class ProductAPIService {

    baseUrl = "http://localhost:5258";
    apiUrl = "/api/products";

    async getAll() {
        try {
            var response = await fetch(`${this.baseUrl}${this.apiUrl}`);
            var result = await response.json();
            //console.log(result);
            return result;
        } catch (e) {
            throw Error(e);
        }
    }
    getDetails( productId ) { 
        var url = `${this.baseUrl}${this.apiUrl}/${productId}`; 
        // var response  = fetch(url);
        // var result = response.json(); 
        // return result; 
        return fetch(url);
        //.then((response) => response.json())
        //.then((data)=> data);
    }
    async updateToDB( productObj ) { 
        var body = JSON.stringify(productObj); 
        var headers={
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer token'
        }; 
        var url = `${this.baseUrl}${this.apiUrl}/${productObj.productId}`
        var response = await fetch (
            url, 
            {
                body: body,
                method:'PUT',
                headers: headers
            }
        ); 
        var result = await response.json(); 
        return result;
    }
    async createInDb( productObj ) { 
        //console.log(productObj)
        productObj.discontinued=productObj.discontinued=='on'?true:false;
        var body = JSON.stringify(productObj); 
        var headers={
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer token'
        }; 
        var url = `${this.baseUrl}${this.apiUrl}`
        var response = await fetch (
            url, 
            {
                body: body,
                method:'POST',
                headers: headers
            }
        ); 
        var result = await response.json(); 
        return result;
    }
}