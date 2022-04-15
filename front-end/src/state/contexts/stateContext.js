import React, { createContext, useContext, useReducer } from 'react';
import { stateReducer } from '../reducers';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateContextProvider = ({ children }) => {
	const initialState = {
		categories: [],
		products: []
	};

	const [state, dispatch] = useReducer(stateReducer, initialState);

	return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};
