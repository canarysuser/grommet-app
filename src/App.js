
import { Grommet, Text, Header, Box } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import ProductHome from './products/ProductHome';
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
    <AppBar>
      <Text size='large'>Grommet App</Text>
    </AppBar>
    <Box 
      direction='row'
      border={{color:'blue', size:'large'}}
      pad='medium'>
        {/* <Text margin='medium' size='xxlarge'>Welcome To Grommet App</Text> */}
        <ProductHome/>
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
