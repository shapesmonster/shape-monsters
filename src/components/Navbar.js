import TwitterImg from '../assets/TwitterImg.png'
import discord from '../assets/discord.png'
import { useWeb3React} from "@web3-react/core"


const Navbar = ({connect, disconnect}) => {
	const context = useWeb3React()
	const {account} = context

	return (
		<div className="navbar">
			<a className="discord_icon" target="_blank" rel="noreferrer" href="https://discord.g${g/S5mM2BjsTp">
			<img src={discord} alt="discord" />
			</a>
			<a className="twitter_icon" target="_blank" rel="noreferrer" href="https://twitter.com/ShapeMonsters">
				<img src={TwitterImg} alt="twitter" />
			</a>

			<button className="wallet_btn" onClick={account?disconnect:connect}>{account?`${account.slice(0,5)}...${account.slice(-4,-1)}`:"connect wallet"}</button>
		</div>
	)
}

export default Navbar
