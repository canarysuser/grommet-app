import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router';
import { Box, Text, Form, FormField, CheckBox, Button, RangeInput } from 'grommet';
import { Link } from 'react-router-dom';
import ProductAPIService from './ProductAPIService';
import ProductModel from '../products/ProductModel';

export default function RoutedCreate() {
    const [model, setModel] = useState(new ProductModel(0,'',0,0));
    const [canRedirect, setCanRedirect] = useState(false)

    useEffect(() => {
    })
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }
    const submitForm = async (e)=>{
        e.preventDefault(); 
        //place the API call for updating 
        let service = new ProductAPIService(); 
        await service.createInDb(model);
        setCanRedirect(true);
    }
    if(canRedirect){
        return (<Navigate to='/routedList' replace/> )
    }
    return (
        <>
            {model && (
                <Box>
                    <Link to='/routedList'>Back to List</Link>
                    <Box>
                        <Text textAlign='center' size='3xl' color='red'>
                            Add a Product
                        </Text>
                        <Form noValidate onSubmit={submitForm}>
                            <FormField
                                label='Product Name'
                                name='productName'
                                required
                                value={model.productName}
                                onChange={handleChange}

                            />

                            <FormField
                                label='Unit Price'
                                name='unitPrice'
                                required
                                value={model.unitPrice}
                                onChange={handleChange}
                            />
                            <FormField
                                label='Stock Level'
                                name='unitsInStock'
                                component={RangeInput}
                                value={model.unitsInStock}
                                onChange={handleChange}
                            />
                            <Text size='small'>{model.unitsInStock}</Text>
                            <CheckBox checked={model.discontinued}
                                label='Discontinued? '
                                
                                onChange={handleChange}
                                name='discontinued' />
                            <Box justify='between' align='stretch' direction='row'>
                                <Button type='submit' active label='Submit' />
                                <Button type='reset' label='Reset' />
                            </Box>
                        </Form>

                    </Box>
                </Box>)
            }
        </>
    )
}
