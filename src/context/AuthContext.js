import { useEffect } from 'react';
import {createContext, useReducer} from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

export const authReducer = (state,action) => {
    switch(action.type){
        case 'LOGIN':
            return {user: action.payload};
        case 'LOGOUT':
            return {user: null};
        default:
            return state;
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {user: null}); 
    const history = useHistory();

    useEffect( () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if(user){
            dispatch({type: 'LOGIN', payload: user});
        }
        else{
            history.push('/auth');
        }


    }, [])

    console.log("AuthContext state: ", state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}