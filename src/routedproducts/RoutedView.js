import { Box, Text, Form, FormField, CheckBox, Button, RangeInput } from 'grommet';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router'
import ProductAPIService from './ProductAPIService';
import { getProductDetails } from './ProductAxiosService';


export default function RoutedView() {
    const { id } = useParams();
    const [model, setModel] = useState();

    useEffect(() => {
        async function fetchData() {
            if (!model) {
                // var service = new ProductAPIService();
                // service.getDetails(id)
                //     .then((response) => response.json())
                //     .then((data) => setModel(data));
                var data = await getProductDetails(id);
                setModel(data);
            }
        }
        fetchData();
    })
    // if (!model) {
    //     return (
    //         <Box>
    //             <Text color="green">Fetching data. Please wait</Text>
    //         </Box>
    //     )
    // }
    return (
        <>
            {model && (
                <Box>
                    <Link to='/routedList'>Back to List</Link>
                    <Box>
                        <Text textAlign='center' size='3xl' color='red'>
                            Product Details
                        </Text>
                        <Form noValidate >
                            <FormField
                                label='Product Name'
                                name='productName'
                                required
                                value={model.productName}

                            />

                            <FormField
                                label='Unit Price'
                                name='unitPrice'
                                required
                                value={model.unitPrice}

                            />
                            <FormField
                                label='Stock Level'
                                name='unitsInStock'
                                component={RangeInput}
                                value={model.unitsInStock}

                            />
                            <Text size='small'>{model.unitsInStock}</Text>
                            <CheckBox checked={model.discontinued}
                                label='Discontinued? '
                                value={model.discontinued}

                                name='discontinued' />
                            {/* <Box justify='between' align='stretch' direction='row'>
                        <Button type='submit' active label='Submit' />
                        <Button type='reset' label='Reset' />
                    </Box> */}
                        </Form>

                    </Box>
                </Box>)
            }
        </>
    )
}
