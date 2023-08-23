import { Box, Anchor, Nav, Header, Text, Select } from 'grommet'
import { AppsRounded, Home, List } from 'grommet-icons'
import React from 'react'

function PageHeader() {
  return (
    <Header background='brand' pad="small">
      <Box direction='row' align='center' gap='small'>
        <Anchor color='white' href='/home'>Grommet App</Anchor>
      </Box>
      <Nav direction='row'>
        <Anchor href="/home" label='Home' icon={<Home />} />
        <Anchor href="/products" label='Products' icon={<List />} />
        <Anchor href="/routedList" label='Routed List' icon={<AppsRounded />} />
      </Nav>
    </Header>
  )
}

export default PageHeader