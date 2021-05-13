/* This file responsible for creating global states and also passing to this global states other section of the application */

import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialStates/authInitialState';
import contacts from './reducers/contacts';
import contactsInitialState from './initialStates/contactsInitialState';

//Context need a default value so we gave empty object to the createContext func
export const GlobalContext = createContext({});

/* This high order component taking children and then It's going to be returning something and then passing it to those children   */
const GlobalProvider = ({children}) => {
  //useReducer give us a way to create state and a way to change the state
  //useReducer takes func to change state and initial state we want to change
  const [authState, autDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );
  //All this stuff accesible with children from within the GlobalProvider wrap
  return (
    <GlobalContext.Provider
      value={{authState, contactsState, autDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
