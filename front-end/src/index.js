import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeServer } from './server';
import { AuthContextProvider, StateContextProvider } from './state/contexts';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<StateContextProvider>
				<App />
			</StateContextProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
