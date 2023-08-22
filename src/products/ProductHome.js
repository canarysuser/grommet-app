//rcc -> react class component 
//rce -> react class component with separate export statement 
//rfc -> react function component 
//rfce -> react function component with separate export statement 
//rafc 
import React, { Component } from 'react'
import { ProductMockService } from './ProductMockService';
import ProductList from './ProductList';
import {Grid, Box, Text} from "grommet";
import ProductDetails from './ProductDetails';
import ProductDetailsFn from './ProductDetailsFn';

class ProductHome extends Component {
    constructor(props){
        super(props); 
        this.state ={ 
            items: [], 
            selectedItem: {},
            hasError:false,
        }
        //this.populateItems();
        this.selectedProduct = this.selectedProduct.bind(this);
    }
    //on component getting loaded onto the DOM 
    //react triggers a lifecycle event called componentDidMount()
    componentDidMount() {
        this.populateItems();
    }
    populateItems() {
        var service = new ProductMockService();
        this.setState({
            ...this.state,
            items: service.getAll()
        });
    }
    selectedProduct(productId) { 
        var service =new ProductMockService(); 
        if(productId) {
            this.setState({
                ...this.state, 
                selectedItem: service.getById(productId)
            });
        }
    }//bind the selectedProduct in the constructor
    updateProduct = (productObj) => {
        var service=  new ProductMockService(); 
        service.update(productObj);
        this.populateItems();
    }
  render() {
    if(this.state.hasError)
        return (<div>Error</div>);

    return (
        <Grid areas={[
            {name: 'list', start:[0,0], end:[0,0]},
            {name:'details', start:[1,0], end:[1,0]}
        ]}
        columns={['medium', 'flex']}
        rows={['fill']}
        gap='small'>
            <Box gridArea='list'>
                <ProductList {...this.state}
                    viewClick={this.selectedProduct}/>
            </Box>
            <Box gridArea='details'>
                <ProductDetails 
                    selectedItem={this.state.selectedItem}
                    updateProduct={this.updateProduct}/>
                <ProductDetailsFn/>
            </Box>
        </Grid>
    )
  }
}

export default ProductHome