import { Box, Anchor, Nav, Header, Text, Select } from 'grommet'
import { AppsRounded, Home, List, Filter, Storage } from 'grommet-icons'
import React, { useState } from 'react'
import i18n from '../i18n'

const languages = {
  en: {localName: 'English'},
  de: {localName: 'Deustch'}
};

function PageHeader() {
  const [lang, setLang]=useState(); 

  const handleChange = (e)=>{
    setLang(e.target.value); 
    i18n.changeLanguage(e.target.value)
  }
  return (
    <Header background='brand' pad="small">
      <Box direction='row' align='center' gap='small'>
        <Anchor color='white' href='/home'>Grommet App</Anchor>
      </Box>
      <Nav direction='row'>
        <Anchor href="/home" label='Home' icon={<Home />} />
        <Anchor href="/products" label='Products' icon={<List />} />
        <Anchor href="/routedList" label='Routed List' icon={<AppsRounded />} />
        <Anchor href="/reducers" label='Reducers' icon={<Filter />} />
        <Anchor href="/context" label='Context API' icon={<Storage />} />
        <Text>Language:</Text>
        <Select size='small' width='xxsmall'
          options={Object.keys(languages).map((lng)=>lng)}
          value={lang}
          onChange={handleChange}/>        
      </Nav>
    </Header>
  )
}

export default PageHeader