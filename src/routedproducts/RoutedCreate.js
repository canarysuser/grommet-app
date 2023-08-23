import React from 'react'
import { Box, Text } from 'grommet';
import { Link } from 'react-router-dom';

export default function RoutedCreate() {
  return (
    <Box> 
        <Link to='/routedList'>Back to List</Link>
        <Text size='large'>Create New Product</Text>
    </Box>
  )
}
