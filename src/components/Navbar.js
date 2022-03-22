import TwitterImg from '../assets/TwitterImg.png'
import discord from '../assets/discord.png'


const Navbar = () => {
	return (
		<div className="navbar">
			<a className="discord_icon" target="_blank" rel="noreferrer" href="https://discord.gg/S5mM2BjsTp">
			<img src={discord} alt="discord" />
			</a>
			<a className="twitter_icon" target="_blank" rel="noreferrer" href="https://twitter.com/ShapeMonsters">
				<img src={TwitterImg} alt="twitter" />
			</a>

			<button className="wallet_btn">connect wallet</button>
		</div>
	)
}

export default Navbar
