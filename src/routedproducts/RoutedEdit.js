import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router';
import { Box, Text, Form, FormField, CheckBox, Button, RangeInput } from 'grommet';
import { Link } from 'react-router-dom';
import ProductAPIService from './ProductAPIService';
import { updateProductToDb } from './ProductAxiosService';



export default function RoutedEdit() {
    const { id } = useParams('id');
    const [model, setModel] = useState();
    const [canRedirect, setCanRedirect] = useState(false)

    useEffect(() => {
        function fetchData() {
            if (!model) {
                var service = new ProductAPIService();
                service.getDetails(id)
                    .then((response) => response.json())
                    .then((data) => setModel(data));
            }
        }
        fetchData();
    })
    const handleChange = (e) => {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }
    const submitForm = async (e)=>{
        e.preventDefault(); 
        //place the API call for updating 
        // let service = new ProductAPIService(); 
        // await service.updateToDB(model);
        await updateProductToDb(model);
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
                            Update Product Details
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
                                value={model.discontinued}
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
