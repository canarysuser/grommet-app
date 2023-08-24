import React, { useReducer, useState } from 'react'
import { Box, Heading, Text, Table, TableRow, TableCell, Button } from "grommet"; 
import {Checkmark, Close, Previous, Next} from 'grommet-icons'
import { productReducer} from '../shared/product-nostore';

export default function ProductReducer() {
    const [state, dispatch] = useReducer(productReducer);

    if(!state) {
        return <Heading level='1' color='status-critical'>Nothing to render</Heading>
    }
    if(state.hasError) {
        return <Heading level='1' color='status-critical'>{state.error.message}</Heading>
    }

  return (
    
    <Box direction='column' border='all' margin='small' justify='center' gap='small' width='large'>
        <Heading level='2' alignSelf='center'>Product Details</Heading>
        <Table justify='center' caption='Product Details'>
            <TableRow>
                <TableCell border='bottom' background='neutral-1'>Product Name</TableCell>
                <TableCell border='bottom'>{state.currentItem.productName}</TableCell>
                <TableCell border='bottom' background='neutral-1'>Unit Price</TableCell>
                <TableCell border='bottom'>{state.currentItem.unitPrice}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell border='bottom' background='neutral-1'>Stock Level</TableCell>
                <TableCell border='bottom'>{state.currentItem.unitsInStock}</TableCell>
                <TableCell border='bottom' background='neutral-1'>Discontinued</TableCell>
                <TableCell border='bottom'>
                    {
                        state.currentItem.discontinued? 
                            <Checkmark color='green'/> : 
                            <Close color='red'/>
                    }
                </TableCell>
            </TableRow>
        </Table>
        <Box direction='row' flex pad='small' round border='all' justify='between'>
            <Button alignSelf='start' label='Prev' icon={<Previous/>}
                disabled={state.isBOF} 
                onClick={()=>{}}/>
            <Text alignSelf='stretch' fill textAlign='center'>
                {state.currentIndex} of {state.totalItems}
            </Text>
            <Button alignSelf='end' label='Next' icon={<Next/>}
                disabled={state.isEOF} 
                onClick={()=>{}}/>
        </Box>
    </Box>

  )
}
