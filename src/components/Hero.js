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
	const [mintType, setMintType] = useState("")
	const [message, setMessage] = useState("")

	const handleMint = () => {
		if(contract == undefined) return
		console.log("Minting")
		// console.log("web3", web3.utils.toWei('5','ether'))
		// set price
		console.log("mintType:", mintType)
		const price = mintType=="mint"?8:5

		const valueInt = price*amount
		const value = web3.utils.toWei(valueInt.toString())
		console.log("after declaring value")
		console.log("Value:", value.toString())
		setProcessingTx(true)
		// call function
		var callFunction;

		if(mintType=="mint") {
			callFunction = contract.methods.mint(amount)
		} else {
			callFunction = contract.methods.mintListed(amount, getProofWhiteList(account))
		}

		callFunction.send({
			from: account,
			value: value
		})
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
		if (!isMintActive) {
			setMessage("Sale is closed")
			return
		}
		// console.log("contract:", contract)
		console.log("inside mint")
		setMintType("mint")
		setOpen(true)
		setMessage("")
	}
	async function freeMint() {
		if(chainId == undefined) return
		console.log("freeMint")
		if(hasFreemint(account) && isFreemintActive) {
			setMessage("Please, confirm transaction")
			setProcessingTx(true)
			contract.methods.freeMint(getProofFreemint(account))
			.send({
				from:account
			})
			setProcessingTx(false)
			setMessage("")
			return
		} else {
			setMessage("Not allowed to Free Mint")
		}
	}
	async function whiteListMint() {
		if(chainId == undefined) return
		console.log("whiteListMint")
		if (hasWhiteList(account) && isWhitelistActive) {
			setMessage("")
			setProcessingTx(true)
			setMintType("whiteList")
			setOpen(true)
			// contractMintListed(amount, getProofWhiteList(account))
			setProcessingTx(false)
			return
		} else {
			setMessage("Not allowed to White List Mint")
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
			<p>Shape Monsters are one of the first NFT collections on the Moonbeam Network consisting of 222 algorithmically generated NFTs. </p>


			<div className="minted">
				<h1>{totalSupply}/222</h1>
				<span>minted</span>
			</div>

			<div className="mint_button_container">
				<button onClick={account?mint:connect}>{account?"MINT":"Connect"}</button>
				<div style={{color: 'red'}}> {message} </div>
			</div>

			<img className="up_arrow" src={ArrowUp} alt="ArrowUp" />
		</div>
	)
}

export default Hero
