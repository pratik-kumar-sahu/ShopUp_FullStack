import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeServer } from './server';
import { StateContextProvider } from './state/contexts';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<StateContextProvider>
			<App />
		</StateContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
