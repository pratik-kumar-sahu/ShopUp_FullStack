import React, { createContext, useContext, useReducer } from 'react';
import { productAction } from './actions';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateContextProvider = ({ children }) => {
	const initialState = {
		categories: [],
		products: [],
		wishlistedProducts: [],
		cartProducts: []
	};

	const [state, dispatch] = useReducer(stateReducer, initialState);

	return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

const stateReducer = (state, action) => {
	switch (action.type) {
		case productAction.fetchCategories:
			return { ...state, categories: action.payload };

		case productAction.fetchProducts:
			return { ...state, products: action.payload };

		default:
			break;
	}
};
