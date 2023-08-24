import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:5258/',
    headers: { 'Content-Type':'application/json'}    
});

export const productUrl='api/products';