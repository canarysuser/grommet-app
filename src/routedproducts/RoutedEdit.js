import React from 'react'
import { useParams } from 'react-router';
import { Box, Text } from 'grommet';
import { Link } from 'react-router-dom';


export default function RoutedEdit() {
    const {id} = useParams();
  return (
    <Box> 
        <Link to='/routedList'>Back to List</Link>
        <Text size='large'>Edit Parameter received: {id}</Text>
    </Box>
  )
}
