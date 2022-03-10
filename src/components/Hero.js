import ShapeMonsters from '../assets/ShapeMonsters.png'
import YellowMonster from '../assets/YellowMonster.png'
import PinkMonster from '../assets/PinkMonster.png'
import GoldMonster from '../assets/GoldMonster.png'
import MintingArrows from '../assets/MintingArrows.png'
import ArrowUp from '../assets/ArrowUp.png'

const Hero = () => {
	return (
		<div className="hero_section">
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
			<p>Shape Monsters are one of the first NFT collections on the Moonbeam Network consisting of 1,111 algorithmically generated NFTs. </p>

			<h2>PUBLIC SALE: TO BE ANNOUNCED</h2>

			<div className="minted">
				<h1>0/1111</h1>
				<span>minted</span>
			</div>

			<div className="mint_button_container">
				<img src={MintingArrows} alt="MintingArrows" />
				<button>MINT</button>
			</div>

			<img className="up_arrow" src={ArrowUp} alt="ArrowUp" />
		</div>
	)
}

export default Hero
