import TwitterImg from '../assets/TwitterImg.png'

const Navbar = () => {
	return (
		<div className="navbar">
			<a className="twitter_icon" target="_blank" rel="noreferrer" href="https://twitter.com/ShapeMonsters">
				<img src={TwitterImg} alt="twitter" />
			</a>

			<button className="wallet_btn">connect wallet</button>
		</div>
	)
}

export default Navbar
