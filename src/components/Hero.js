import { useWeb3React} from "@web3-react/core"
import { useState, useEffect } from 'react'
import Web3 from 'web3'

import MintDialog from './MintDialog'

import ShapeMonsters from '../assets/ShapeMonsters.png'
import YellowMonster from '../assets/yellow_01.png'
import PinkMonster from '../assets/pink_01.png'
import GoldMonster from '../assets/green_01.png'
import MintingArrows from '../assets/MintingArrows.png'
import ArrowUp from '../assets/ArrowUp.png'

const address = require('../config/address.json')

const Hero = ({connect}) => {
	const context = useWeb3React()
	const {account, chainId} = context

	const [web3, setWeb3] = useState()
	const [contract, setContract] = useState()
	const [totalSupply, setTotalSupply] = useState(0)
	const [open, setOpen] = useState(false)
 	const [amount, setAmount] = useState(1)
	// const handleClickToOpen = () => {
	// 	setOpen(true);
	// };

	const handleCounterUp = () => {
		setAmount(amount+1)
	}
	const handleCounterDown = () => {
		setAmount(amount-1)
	}
	const handleToClose = () => {
		setOpen(false);
	};

	async function mint() {
		if(chainId == undefined) return
		// console.log("contract:", contract)
		setOpen(true)
		try {
			const receipt = await contract.methods.baseURI().call()
			// .send({
			// 	from:account
			// })
			console.log("Receipt:", receipt)
		} catch(e) {
			console.log("Error while minting:", e)
		}
	}
	useEffect(() => {
		if (chainId == undefined || contract == undefined) return
			contract.methods.totalSupply().call().then((supply)=>{
				// console.log("supply:", supply)
				setTotalSupply(supply)
			})

	}, [contract, chainId])


	useEffect(() => {
		if (chainId == undefined || web3 == undefined) return
		const contractAddress = address.address
    const abi = require('../config/abi.json')

		setContract(new web3.eth.Contract(abi, contractAddress))
	}, [chainId, web3])

	useEffect(() => {
		try {
			setWeb3(new Web3(window.web3.currentProvider, null, {
				transactionConfirmationBlocks: 1
			}))
		} catch(e) {
			console.log("Error:", e)
		}

	}, [])
	useEffect(()=>{
		console.log("Account Hero: ", account)
	}, [account])
	return (
		<div className="hero_section">
		<MintDialog open={open} onClose={handleToClose} amount={amount} handleCounterUp={handleCounterUp} handleCounterDown={handleCounterDown}/>
			<img className="shape_monster" src={ShapeMonsters} alt="ShapeMonsters" />



			<div className="monsters_row">
				<img src={YellowMonster} alt="YellowMonster" />
				<img src={PinkMonster} alt="PinkMonster" />
				<img src={GoldMonster} alt="GoldMonster" />
			</div>
			<p> </p>
			<p> </p>
			<p> </p>
			<p>Earn passive income with Shape Monsters!</p>
			<p>Shape Monsters are one of the first NFT collections on the Moonbeam Network consisting of 2,222 algorithmically generated NFTs. </p>

			<h2>PUBLIC SALE: MAY 4th, 2022</h2>

			<div className="minted">
				<h1>{totalSupply}/2222</h1>
				<span>minted</span>
			</div>

			<div className="mint_button_container">
				<img src={MintingArrows} alt="MintingArrows" />
				<button onClick={account?mint:connect}>{account?"MINT":"Connect Wallet"}</button>
			</div>

			<img className="up_arrow" src={ArrowUp} alt="ArrowUp" />
		</div>
	)
}

export default Hero
