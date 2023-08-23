//FILE: RoutedProducts/RoutedList.js 
import React, { useEffect, useState } from 'react'
import { ProductMockService } from '../products/ProductMockService'
import { 
    Box,
    Heading,
    Table, 
    TableHeader, 
    TableRow, 
    TableCell,
    TableBody,
    Button,
    Text,
    Anchor, 
    Nav
    
} from "grommet";


function RoutedList() {
    var service = new ProductMockService();
    const [list, setList] = useState([]);
    useEffect(() => {
        if (list.length == 0) {
            setList(service.getAll());
        }
    })

    const viewClick = (id) =>{

    }
    const editClick = (id) =>{ 

    }


    if (list.length == 0) {
        return <Heading level='1' color='red' textAlign='center'>No items found.</Heading>
    }
    return (
        <Box>
            <Heading
                level='1'
                size='xlarge'
                color='red'
                textAlign='center'>
                Product List
            </Heading>
            <Box>
                <Text
                    size='small'
                    style={{ fontWeight: 'bold', margin: '10px' }}>
                    Products list description or subtitle
                </Text>
                <Nav>
                    <Anchor href='/routed/create'>Create New</Anchor>
                </Nav>
            </Box>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell scope='col' size='xxlarge'>Product Name</TableCell>
                        <TableCell scope='col' size='large'>Price</TableCell>
                        <TableCell scope='col' size='xsmall'>
                        </TableCell>
                        <TableCell scope='col' size='xsmall'>
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        list && list.map((value, index) => (
                            <TableRow key={value.productId}>
                                <TableCell>{value.productName}</TableCell>
                                <TableCell>{value.unitPrice}</TableCell>
                                <TableCell scope='row' size='xsmall'>
                                    <Button primary label='View' 
                                        onClick={(e) => viewClick(value.productId)} />
                                </TableCell>
                                <TableCell scope='row' size='xsmall'>
                                    <Button secondary label='Edit'
                                        onClick={(e) => editClick(value.productId)} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Box>

    )
}

export default RoutedList   