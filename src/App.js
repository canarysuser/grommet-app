
import { Grommet, Text, Header, Box } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import PageHeader from './ui/PageHeader';
import { Routes,Route } from 'react-router';

import routes from "./ui/AppRouting";

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
          {
            routes.map((value, index)=>(
              <Route key={index} path={value.path} element={value.element}/>
            ))
          }
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
