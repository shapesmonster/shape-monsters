import Tofu from '../assets/Tofu.png'
import BangBangLab from '../assets/BangBangLab.png'
import TwitterImg from '../assets/TwitterImg.png'
import Discord from '../assets/discord.png'

const Footer = () => {
	return (
		<div className="footer">
			<a className="BangBangLab_icon" target="_blank" rel="noreferrer" href="https://bangbanglab.ju.mp">
				<img src={BangBangLab} alt="BangBangLab" />
			</a>
			<a className="discord_icon" target="_blank" rel="noreferrer" href="https://discord.gg/S5mM2BjsTp">
				<img src={Discord} alt="discord" />
			</a>
			<a className="twitter_icon" target="_blank" rel="noreferrer" href="https://twitter.com/ShapeMonsters">
				<img src={TwitterImg} alt="twitter" />
			</a>
			<img src={Tofu} alt="Tofu" />
		</div>
	)
}

export default Footer
