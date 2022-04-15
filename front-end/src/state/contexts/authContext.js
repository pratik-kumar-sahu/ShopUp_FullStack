import { createContext, useContext, useReducer } from 'react';
import { authReducer } from '../reducers';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
	const initialState = {
		wishlist: [],
		cart: [],
		showLoader: false
	};

	const [authState, authDispatch] = useReducer(authReducer, initialState);

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
};
