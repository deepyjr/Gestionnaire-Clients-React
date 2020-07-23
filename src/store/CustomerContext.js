import React from 'react'

const CustomerContext = React.createContext();
const localState = JSON.parse(localStorage.getItem('customerState'));

const initialState ={
    selectedCustomer:{
        name:null,
        company:null,
        city:null,
        state:null,
        date:null,
    }
}

function customerReducer(state,action){
    switch(action.type){
        case'selected':{
            return{
                ...state,
                selectedCustomer:action.payload
            }
        }

        default:{
            return state;
        }
    }
}

function CustomerProvider({children}) {
    const [customerState, customerDispatch] = React.useReducer(customerReducer, localState || initialState)
    
    React.useEffect(() => {
    localStorage.setItem('customerState', JSON.stringify(customerState))
    }, [customerState])
    
    return (
    <CustomerContext.Provider value={{customerState, customerDispatch}}>
    {children}
    </CustomerContext.Provider>
    )
   }
    
   export { CustomerProvider, CustomerContext }