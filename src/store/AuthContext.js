import React from 'react'

const AuthContext = React.createContext();
const localState = JSON.parse(localStorage.getItem('authState'));

const initialState ={
    name:null,
    email:null,
    token:null
}

function authReducer(state,action){
    switch(action.type){
        case'login':{
            return{
                ...state,
                name:action.payload.user.name,
                email:action.payload.user.email,
                token:action.payload.token
            }
        }

        default:{
            return state;
        }
    }
}

function AuthProvider({children}) {
    const [authState, authDispatch] = React.useReducer(authReducer, localState || initialState)
    
    React.useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(authState))
    }, [authState])
    
    return (
    <AuthContext.Provider value={{authState, authDispatch}}>
    {children}
    </AuthContext.Provider>
    )
   }
    
   export { AuthProvider, AuthContext }