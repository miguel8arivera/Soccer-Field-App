import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootswatch/dist/Morph/bootstrap.min.css';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App title='Total Soccer' />
	</React.StrictMode>
);
