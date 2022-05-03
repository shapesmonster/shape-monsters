import { useState, useEffect } from 'react'
import { useWeb3React} from "@web3-react/core"
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { Web3Provider } from "@ethersproject/providers";
// import { InjectedConnector } from '@web3-react/injected-connector'

import {injected} from "./utils/Connector"
// import Web3 from 'web3'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Stella from './components/Stella'
import Footer from './components/Footer'
import Helmet from 'react-helmet'

function getLibrary(provider) {
  return new Web3(provider)
}

const App = () => {
// function App() {
	const {
		active,
		account,
		library,
		connector,
		activate,
		deactivate,
		chainId
	} = useWeb3React()

	async function connect() {
    try {
			console.log("connecting")
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

	async function disconnect() {
		try {
			deactivate()
		} catch (ex) {
			console.log(ex)
		}
	}

	const [web3, setWeb3] = useState()
	const [installMetamask, setInstallMetamask] = useState(false)


	useEffect(() => {
		console.log("setting web3 react")
    try {
      setWeb3(new Web3(window.web3.currentProvider, null, {
        transactionConfirmationBlocks: 1
      }))
    } catch(e) {
      setInstallMetamask(true)
    }
  }, [])

	useEffect(() => {
		console.log("Web3:", web3)
	}, [web3])
	return (
			<div className="App">
				<Helmet>
					{/*<!-- HTML Meta Tags -->*/}
					<title>Shape Monsters</title>
					<meta name="description" content="Shape Monster are one of the first NFT collections on the Moonbeam Network consisting of 1,111 algorithmically generated NFTs. "/>

					{/*<!-- Google / Search Engine Tags -->*/}
					<meta itemprop="name" content="Shape Monsters"/>
					<meta itemprop="description" content="Shape Monster are one of the first NFT collections on the Moonbeam Network consisting of 1,111 algorithmically generated NFTs. "/>
					<meta itemprop="image" content="https://shapes.monster/static/media/YellowMonster.d60dc68eadb27e76eddb.png"/>

					{/*<!-- Facebook Meta Tags -->*/}
					<meta property="og:url" content="https://shapes.monster"/>
					<meta property="og:type" content="website"/>
					<meta property="og:title" content="Shape Monsters"/>
					<meta property="og:description" content="Shape Monster are one of the first NFT collections on the Moonbeam Network consisting of 1,111 algorithmically generated NFTs. "/>
					<meta property="og:image" content="https://shapes.monster/static/media/YellowMonster.d60dc68eadb27e76eddb.png"/>

					{/*<!-- Twitter Meta Tags -->*/}
					<meta name="twitter:card" content="summary_large_image"/>
					<meta name="twitter:title" content="Shape Monsters"/>
					<meta name="twitter:description" content="Shape Monster are one of the first NFT collections on the Moonbeam Network consisting of 1,111 algorithmically generated NFTs. "/>
					<meta name="twitter:image" content="https://shapes.monster/static/media/YellowMonster.d60dc68eadb27e76eddb.png"/>
				</Helmet>
				<Navbar connect={connect} disconnect={disconnect}/>
				<Hero connect={connect}/>
				<About />
				<Roadmap />
				<Stella />
				{/* <Team />*/}
				<Footer />
			</div>
	)
}

export default App
