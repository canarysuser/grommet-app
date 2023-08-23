import ProductHome from "../products/ProductHome";
import RoutedCreate from "../routedproducts/RoutedCreate";
import RoutedEdit from "../routedproducts/RoutedEdit";
import RoutedList from "../routedproducts/RoutedList";
import RoutedView from "../routedproducts/RoutedView";
import Home from "./Home";
import NotFound from "./NotFound";

const routes = [
    {
        path:'/home',
        element:<Home />
    }, 
    {
        path:'/products',
        element:<ProductHome />
    },
    {
        path:'/routedList',
        element:<RoutedList />
    },
    {
        path:'/routed/create',
        element:<RoutedCreate />
    },
    {
        path:'/routed/view/:id',
        element:<RoutedView />
    },
    {
        path:'/routed/edit/:id',
        element:<RoutedEdit />
    },
    {
        path:'*',
        element:<NotFound />
    }

];

export default routes;