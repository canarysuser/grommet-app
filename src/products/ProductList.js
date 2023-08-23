import React from 'react'
import { 
    Box,
    Heading,
    Table, 
    TableHeader, 
    TableRow, 
    TableCell,
    TableBody,
    Button,Text
} from "grommet";

function ProductList(props) {

    const handleViewClick=(productId) =>{
        console.log("ProductList: selected productid", productId);
    }
  return (
    <Box>
        <Heading 
            level='1' 
            size='xlarge' 
            color='red'
            textAlign='center'>
                {props.title}

        </Heading>
        <Text size='small' style={{fontWeight:'bold', margin:'10px'}}  >{props.subtitle}</Text>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell scope='col' size='large'>
                    </TableCell>
                    <TableCell scope='row' size='large'>
                    </TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                 props.items.map((value, index)=>(
                    <TableRow key={value.productId}>
                        <TableCell>{value.productName}</TableCell>
                        <TableCell>{value.unitPrice}</TableCell>
                        <TableCell scope='row' size='large'>
                            <Button primary label='View' size='small'
                            onClick={(e)=>props.viewClick(value.productId)}/>
                             </TableCell>
                            <TableCell scope='row' size='large'>
                            <Button secondary label='Edit' />
                        </TableCell>
                    </TableRow>
                 ))   
                }
            </TableBody>
        </Table>
    </Box>
  )
}

export default ProductList