import { Box,Text, Button } from 'grommet';

import React, { useReducer } from 'react'
import ProductReducer from './ProductReducer';


//define the initial State 
const initialValue = 0; 

//Action Type Constants 
const AddAction = "add";
const MinusAction = "minus";
const MultiplyAction = "multiply";
const DivideAction = "divide";
const IncrementAction="Increment";
const DecrementAction="Decrement";

//Reducer = (state, action) => {} 
//action { type, payload/new data }
//state { existing state object }
const CounterReducer = (state, action) => {
    state = state || initialValue;
    switch(action.type) {
        case IncrementAction : return state + action.newValue; 
        case DecrementAction : return state - action.newValue;
        default: return state
    }
}
const MathReducer = function(state, action) {
    state = state || initialValue; 
    switch (action.type) {
        case AddAction: return state + action.value;
        case MinusAction: return state - action.value;
        case MultiplyAction: return state * action.value;
        case DivideAction: return state / action.value;
        default: return state; 
    }
}
function Counter1(props) { 
    const [state, dispatch] = useReducer(CounterReducer);
    const [mathState, dispatch2] = useReducer(MathReducer, initialValue);
    return (
        <Box width='small'>
            <Text size='large'> Counter1 is : {state} </Text>
            <Text size='large'> Math Result is : {mathState} </Text>
            <Button label='Increment' 
                onClick={()=>dispatch({type:IncrementAction, newValue:1})} />
            <Button label='Decrement' 
                onClick={()=>dispatch({type:DecrementAction, newValue:1})} />
            <Button label='Add 10' 
                onClick={()=>dispatch2({type:AddAction, value:10})} />
            <Button label='Minus 5' 
                onClick={()=>dispatch2({type:MinusAction, value:5})} />
            <Button label='Divide By 8' 
                onClick={()=>dispatch2({type:DivideAction, value:7})} />
            <Button label='Multiply 7' 
                onClick={()=>dispatch2({type:MultiplyAction, value:8})} />
        </Box>
    )
}
function Counter2(props) { 
    const [state, dispatch] = useReducer(CounterReducer);
    return (
        <Box width='large'>
            <Text size='large'> Counter2 is : {state} </Text>
            <Button label='Increment' 
                onClick={()=>dispatch({type:IncrementAction, newValue:1})} />
            <Button label='Decrement' 
                onClick={()=>dispatch({type:DecrementAction, newValue:1})} />
        </Box>
    )
}
export default function UsingReducer() {
  return (
    <Box size='large'>
        {/* <Counter1/>
        <Counter2/>
         */}
        <ProductReducer/>
    </Box>
  )
}
