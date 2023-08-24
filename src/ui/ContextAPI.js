import React, { useContext, useReducer, useState } from 'react'
import { Box, TextInput, Button, Heading, Paragraph, Text } from "grommet"

//initial State 
export const initialState = { name: '', email: '', location: '' }
// reducers 
export const personReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case 'Name': return { ...state, name: action.name }
        case 'Email': return { ...state, email: action.email }
        case 'Location': return { ...state, location: action.location }
        default: return state;
    }
}
//Create a React Context object 
export const PersonContext = React.createContext();


export function NameComponent() {
    const [name, setName] = useState('');
    const { dispatch } = useContext(PersonContext)
    return (
        <Box align='center' width='medium'>
            <TextInput placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <Button type='button' secondary label='Set Name'
                onClick={(e) => { dispatch({ type: 'Name', name: name }) }} />
        </Box>
    )
}
export function EmailComponent() {
    const [email, setEmail] = useState('');
    const { dispatch } = useContext(PersonContext)
    return (
        <Box align='center' width='medium'>
            <TextInput placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <Button type='button' secondary label='Set Email'
                onClick={(e) => { dispatch({ type: 'Email', email: email }) }} />
        </Box>
    )
}
export function LocationComponent() {
    const [location, setLocation] = useState('');
    const {state,  dispatch } = useContext(PersonContext)
    return (
        <Box align='center' width='medium'>
            {JSON.stringify(state)}
            <TextInput placeholder='Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)} />
            <Button type='button' secondary label='Set Location'
                onClick={(e) => { dispatch({ type: 'Location', location: location }) }} />
        </Box>
    )
}
export default function ContextAPI() {
    const [state, dispatch] = useReducer(personReducer, initialState);

    return (
        <Box align='center' gap='small' margin='large' flex>
            <Heading level='2' color='green'>Context Operations</Heading>
            <PersonContext.Provider value={{ state, dispatch }}>
                <NameComponent />
                {state.name && <EmailComponent />}
                {state.email && <LocationComponent />}
            </PersonContext.Provider>
            <Paragraph>
                {
                    state.location && 
                    <Text size='medium'>
                        Person with {state.name}, 
                        having {state.email}, 
                        resides in {state.location}
                    </Text>
                }
            </Paragraph>
        </Box>
    )
}
