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
    Nav,
    Notification,
    Paragraph

} from "grommet";
import { Navigate } from 'react-router';
import ProductAPIService from './ProductAPIService';


function RoutedList() {
    //var service = new ProductMockService();
    var service = new ProductAPIService();
    const [list, setList] = useState([]);
    const [path, setPath] = useState('');
    const [error, setError] = useState(null);
    const [visible, setVisible]=useState(false);

    useEffect(() => {
        async function fetchData() {
            if (list.length == 0) {
                //setList(service.getAll());
                try { 
                    var items = await service.getAll();
                    setList(items);
                    setError(null);
                } catch (e) { 
                    setVisible(true);
                    setError(e);
                }
            }
        }
        fetchData();
    }, [list])

    const viewClick = (id) => {
        let route = `/routed/view/${id}`;
        setPath(route);
    }
    const editClick = (id) => {
        let route = `/routed/edit/${id}`;
        setPath(route);
    }

    if(error) { 
        return (
            <>
            { 
                visible && (
                    <Notification 
                        toast 
                        title='Error Notification'
                        message={error.message ? error.message : error }
                        onClose={()=>{ setVisible(false); setError(null);}}
                    />
                )
            }
            </>
        )
            
    }

    if (path.length > 0)
        return <Navigate to={path} replace />

    if (list.length == 0) {
        return 
            <Heading level='1' color='red' textAlign='center'>No items found.</Heading>
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
            <Box direction='row' >
                <Text
                    size='large'
                    style={{ fontWeight: 'bold', margin: '10px' }}>
                    Products list description or subtitle
                </Text>
                <Nav alignContent='right'>
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