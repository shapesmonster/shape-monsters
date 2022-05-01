import ShapeMonsters from '../assets/ShapeMonsters.png'
import YellowMonster from '../assets/yellow_01.png'
import PinkMonster from '../assets/pink_01.png'
import GoldMonster from '../assets/green_01.png'
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
			<p>Shape Monsters are one of the first NFT collections on the Moonbeam Network consisting of 2,222 algorithmically generated NFTs. </p>

			<h2>PUBLIC SALE: MAY 4th, 2022</h2>

			<div className="minted">
				<h1>0/2222</h1>
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
