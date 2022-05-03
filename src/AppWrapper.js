import { Web3ReactProvider } from '@web3-react/core'
import App from './App'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

// function getLibrary(provider) {
//   console.log("getting library")
// 	const library = new Web3Provider(provider);
// 	library.pollingInterval = 12000;
// 	return library;
// }

const AppWrapper = () => {
// function App() {

	return (
		<Web3ReactProvider getLibrary={getLibrary} >
      <App/>
		</Web3ReactProvider>
	)
}

export default AppWrapper
