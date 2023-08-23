import { Box, Text } from 'grommet';
import { Link } from 'react-router-dom';
import React from 'react'
import { useParams } from 'react-router'


export default function RoutedView() {
    const {id} = useParams();
  return (
    <Box> 
        <Link to='/routedList'>Back to List</Link>
        <Text size='large'>Parameter received: {id}</Text>
    </Box>
  )
}
