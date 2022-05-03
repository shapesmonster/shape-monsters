import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import AppWrapper from './AppWrapper'

// import { Web3ReactProvider } from '@web3-react/core'
// import Web3 from 'web3'

ReactDOM.render(
	<React.StrictMode>
		<AppWrapper />
	</React.StrictMode>,
	document.getElementById('root')
)
