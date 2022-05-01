import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Footer from './components/Footer'
import Helmet from 'react-helmet'

import { useWeb3React} from "@web3-react/core"

// import Web3Provider from 'web3-react'
// import { Connectors } from 'web3-react'
// const { InjectedConnector, NetworkOnlyConnector } = Connectors
//
// const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })

// const Infura = new NetworkOnlyConnector({
//   providerURL: 'https://mainnet.infura.io/v3/...'
// })

// const connectors = { MetaMask, Infura }
// const connectors = { MetaMask }
// <Web3Provider
// connectors={connectors}
// libraryName={'web3.js'}
// >
// </Web3Provider>


function App() {
	const {
		active,
		account,
		library,
		connector,
		activate,
		deactivate,
		chainId
	} = useWeb3React()
	
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
				<Navbar />
				<Hero />
				<About />
				<Roadmap />
				{/* <Team />*/}
				<Footer />
			</div>
	)
}

export default App
