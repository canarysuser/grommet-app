export default class ProductModel {

    constructor( 
        productId,
        productName,
        unitPrice,
        unitsInStock
    ) { 
        this.productId=productId;
        this.productName=productName;
        this.unitPrice=unitPrice;
        this.unitsInStock=unitsInStock;
        this.discontinued=false;
    }
}
