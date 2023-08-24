//FILE: shared/product-nostore.js 
import { getAllProducts } from "../routedproducts/ProductAxiosService"


export const productInitialState = {
    items: [], 
    currentItem: {}, 
    currentIndex: 0,
    totalItems: 0,
    isBOF:false,
    isEOF: false, 
    hasError:false,
    error: {},
    isLoading:false
}

//DEfine a reducer 
export const productReducer = (state, action)=> {
    switch(action.type) {
        case 'BeginLoad': 
            return {...productInitialState, isLoading:true}
        case 'EndLoad':
            return {
                ...action.payload,
                isLoading:false
            }
        case 'Prev':
        case 'Next':
            return {...action.payload}
        case 'Error':
            return {...state, hasError:true, error: action.payload.error}
        default: 
            return productInitialState;

    }
}

export async function fetchProducts(dispatch, state) {
    console.log('Fetching products....')
    dispatch({type:'BeginLoad'}); 
    try {
        var data = await getAllProducts();
        dispatch({
            type:'EndLoad',
            payload: {
                items: data, 
                isBOF: true,
                isEOF: false, 
                currentIndex: 1, 
                currentItem: data[0],
                totalItems: data.length,
                hasError: false
            }
        })
    } catch (e) { 
        dispatch({type:'Error', payload: { error: e } })
    }
}

export async function prevAction(dispatch, state) { 
    if(state.currentIndex-1===0) {
        state.currentIndex=1;
        state.isEOF=false;
        state.isBOF=true;
    } else { 
        state.currentIndex = state.currentIndex-1;
        state.isEOF=false;
        state.isBOF=false;
    }
    state.currentItem=state.items[state.currentIndex-1];
    return dispatch({type:'Prev', payload: {...state}})
}
export async function nextAction(dispatch, state) { 
    if(state.currentIndex+1>=state.totalItems) {
        state.currentIndex=state.totalItems;
        state.isEOF=true;
        state.isBOF=false;
    } else { 
        state.currentIndex = state.currentIndex+1;
        state.isEOF=false;
        state.isBOF=false;
    }
    state.currentItem=state.items[state.currentIndex-1];
    return dispatch({type:'Next', payload: {...state}})
}