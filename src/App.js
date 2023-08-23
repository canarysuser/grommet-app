
import { Grommet, Text, Header, Box } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import ProductHome from './products/ProductHome';
import { useTranslation } from 'react-i18next';
import PageHeader from './ui/PageHeader';
import { Routes,Route } from 'react-router';
import Home from './ui/Home';
import NotFound from './ui/NotFound';
import RoutedList from './routedproducts/RoutedList';
const customTheme=  {
	global: {
    colors: {
      brand:'yellow'
    },
		font: {
			family: 'Roboto',
			size:'18px',
			height:'20px'
		}
	}
};
function App() {
  

  return (
   <Grommet theme={hpe} full>
    {/* <AppBar >
      <Text size='large'>Grommet App</Text>
      
    </AppBar> */}
    <PageHeader />
    <Box 
      direction='row'
      border={{color:'blue', size:'large'}}
      pad='medium'>
        {/* <Text margin='medium' size='xxlarge'>Welcome To Grommet App</Text> */}
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/products' element={<ProductHome/>}/>
          <Route path='/routedList' element={<RoutedList/>}/>
          {/* http://localhost/something */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        
      </Box>
   </Grommet>
  );
}
function AppBar(props) {
  return (
    <Header background="brand"
            pad={{left:'medium', right:'small', vertical:'small'}}
            elevation='medium'
            {...props}/>
  )
}

export default App;
