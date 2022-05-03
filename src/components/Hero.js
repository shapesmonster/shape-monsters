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

const contractAddress = require('../config/address.json')
const freeMintAddresses = require('../config/freemint.json')
const whiteListAddresses = require('../config/whitelist.json')

const Hero = ({connect}) => {
	const context = useWeb3React()
	const {account, chainId} = context

	const [web3, setWeb3] = useState()
	const [contract, setContract] = useState()
	const [totalSupply, setTotalSupply] = useState(0)
	const [open, setOpen] = useState(false)
 	const [amount, setAmount] = useState(1)
	const [contractMethod, setContractMethod] = useState()

	const [isFreemintActive, setIsFreemintActive] = useState(false)
	const [isWhitelistActive, setIsWhitelistActive] = useState(false)
	const [isMintActive, setIsMintActive] = useState(false)
	const [processingTx, setProcessingTx ] =useState(false)
	// const handleClickToOpen = () => {
	// 	setOpen(true);
	// };

	const handleMint = () => {
		if(contract == undefined) return
		console.log("Minting")
		setProcessingTx(true)
		try {
			contractMethod
			.send({
				from:account
			}).then((receipt)=>{

				console.log("Receipt:", receipt)
				setProcessingTx(false)
			}).catch((e)=>{
				console.log("error",e)
				setProcessingTx(false)

			})
		} catch(e) {
			console.log("Error while minting:", e)
		}

	}
	const handleCounterUp = () => {
		setAmount(amount+1)
	}
	const handleCounterDown = () => {
		if(amount == 1) return
		setAmount(amount-1)
	}
	const handleToClose = () => {
		setOpen(false);
	};

	async function mint() {
		if(chainId == undefined) return
		// console.log("contract:", contract)
		if(hasFreemint(account) && isFreemintActive) {
			setProcessingTx(true)
			contractMethod
			.send({
				from:account
			})
			setProcessingTx(false)
			return
		} else if ((hasWhiteList(account) && isWhitelistActive) || isMintActive ) {

			setOpen(true)
		}


	}

	function hasFreemint(address){
		return address in freeMintAddresses
	}
	function getProofFreemint(address){
		return freeMintAddresses[address]
	}
	function hasWhiteList(address){
		return address in whiteListAddresses
	}
	function getProofWhiteList(address){
		return whiteListAddresses[address]
	}
	// Set contract method depending on user
	// if user in freemint, contractmethod will be freemint
	// if user in whitelistMint, contractMethod will be whitelistMint
	// if user in non of them, contractMethod will be mint

	useEffect(() => {
		if (chainId == undefined || contract == undefined) return
		if(hasFreemint(account)) {
			console.log("It has freemint")
			setContractMethod(contract.methods.freeMint(getProofFreemint(account)))
			return
		} else
		if(hasWhiteList(account) && isWhitelistActive){
			console.log("It has whitelist")
			setContractMethod(contract.methods.mintListed(amount, getProofWhiteList(account)))
			return
		} else {
			setContractMethod(contract.methods.mint(amount))
		}

		// console.log("It has not freemint")
	}, [contract, chainId, amount])

	useEffect(() => {
		if (chainId == undefined || contract == undefined) return
			contract.methods.totalSupply().call().then((supply)=>{
				// console.log("supply:", supply)
				setTotalSupply(supply)
			})
			contract.methods.isFreemintActive().call().then((result)=>{
				setIsFreemintActive(result)
			})
			contract.methods.isWhitelistActive().call().then((result)=>{
				setIsWhitelistActive(result)
			})
			contract.methods.isMintActive().call().then((result)=>{
				setIsMintActive(result)
			})

	}, [contract, chainId])


	useEffect(() => {
		if (chainId == undefined || web3 == undefined) return
    const abi = require('../config/abi.json')

		setContract(new web3.eth.Contract(abi, contractAddress.address))
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
		<MintDialog
			open={open}
			onClose={handleToClose}
			amount={amount}
			handleCounterUp={handleCounterUp}
			handleCounterDown={handleCounterDown}
			handleMint={handleMint}
			processingTx={processingTx}
			/>
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
