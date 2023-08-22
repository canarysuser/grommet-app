import ProductModel from "./ProductModel";

const products = [
    new ProductModel(1, 'Markers', 500, 100),
    new ProductModel(2, 'Charts', 233, 890),
    new ProductModel(3, 'Boards', 666, 789),
    new ProductModel(4, 'Folders', 232, 456),
    new ProductModel(5, 'Papers', 987, 123)
];
export class ProductMockService { 

    getAll() { 
        return products;
    }
    getById(productId) { 
        var filteredItems=products.filter(c=>c.productId===productId);
        if(filteredItems.length)
            return filteredItems[0];
        return null;
    }
    update(productItem) { 
        var itemIndex = products.findIndex(c=>c.productId==productItem.productId); 
        if(itemIndex>-1) {
            products.splice(itemIndex, 1, productItem);//update
        } else {
            products.push(productItem);
        }
    }

}