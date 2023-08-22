import React, { Component } from 'react'
import {
    Box,
    Form,
    FormField,
    TextInput,
    Button,
    Text,
    RangeInput,
    CheckBox
} from "grommet";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        //Local state based on the props.
        this.state={
            selectedItem: this.props.selectedItem
        };
    }
    componentDidMount() {
        this.setState({...this.props})
    }
    static getDerivedStateFromProps(props, state) {
        if(props.selectedItem.productId!==state.selectedItem.productId)
            return props;        
    }

    handleChange=(e)=>{
        // var targetElement = e.target.name; 
        // var value = e.target.value;
        console.log(e.target.name, e.target.value);
        // this.state.selectedItem.productName=value;
        this.setState({
            //...this.state,
            selectedItem: { 
                ...this.state.selectedItem, 
                [e.target.name]:e.target.value
            }
        })
    }
    render() {
        return (
            <Box>
                <Text textAlign='center' size='3xl' color='red'>
                    Product Details
                </Text>
                <Form noValidate>
                    <FormField
                        label='Product Name'
                        name='productName'
                        required
                        value={this.state.selectedItem.productName}
                        onChange={(e)=>this.handleChange(e)}
                    />
                    {/* <input type="text" name="unitPrice"
                        value={this.state.selectedItem.unitPrice}
                        onChange={this.handleChange}/> */}
                    <FormField
                        label='Unit Price'
                        name='unitPrice'
                        required
                        value={this.state.selectedItem.unitPrice}
                        onChange={this.handleChange}
                    />
                    <FormField
                        label='Stock Level'
                        name='unitsInStock'
                        component={RangeInput}
                        value={this.state.selectedItem.unitsInStock}
                        onChange={this.handleChange}
                    />
                    <Text size='small'>{this.state.selectedItem.unitsInStock}</Text>
                    <CheckBox checked={this.state.selectedItem.discontinued}
                        label='Discontinued? ' 
                        value={this.state.selectedItem.discontinued}
                        onChange={this.handleChange}
                        name='discontinued'/>
                </Form>

            </Box>
        )
    }
}

export default ProductDetails