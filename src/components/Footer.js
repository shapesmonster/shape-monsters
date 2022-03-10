import Tofu from '../assets/Tofu.png'
import BangBangLab from '../assets/BangBangLab.png'
import TwitterImg from '../assets/TwitterImg.png'

const Footer = () => {
	return (
		<div className="footer">
			<img src={BangBangLab} alt="BangBangLab" />
			<a className="twitter_icon" target="_blank" rel="noreferrer" href="https://twitter.com/ShapeMonsters">
				<img src={TwitterImg} alt="twitter" />
			</a>
			<img src={Tofu} alt="Tofu" />
		</div>
	)
}

export default Footer
