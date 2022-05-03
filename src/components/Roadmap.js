import RoadmapHeading from '../assets/RoadmapHeading.png'
import Line from '../assets/Line.png'

import RoadmapSquare1 from '../assets/RoadmapSquare1.png'
import RoadmapSquare2 from '../assets/RoadmapSquare2.png'
import RoadmapSquare3 from '../assets/RoadmapSquare3.png'
import RoadmapSquare4 from '../assets/RoadmapSquare4.png'

const Roadmap = () => {
	return (
		<div className="roadmap">
			<div className="heading">
				<img className="heading_img" src={RoadmapHeading} alt="RoadmapHeading" />

				<img className="line" src={Line} alt="Line" />
			</div>

			<div className="roadmaps_row">
				<div className="single_roadmap">
					<img src={RoadmapSquare1} alt="RoadmapSquare1" />

					<div className="text">
						<h2>1 LAUNCH</h2>

						<ul>
							<li>Social Networks and Web</li>
							<li>Design Process</li>
							<li>Collaborations, Partnerships</li>
							<li>and giveaways announced</li>
						</ul>
					</div>
				</div>
				<div className="single_roadmap">
					<img src={RoadmapSquare2} alt="RoadmapSquare2" />

					<div className="text">
						<h2>2 SALE</h2>

						<ul>
							<li>Whitelisting</li>
							<li>Public sale</li>
							<li>Marketplace Listing</li>
							<li>Rarity Chart</li>
						</ul>
					</div>
				</div>
				<div className="single_roadmap">
					<img src={RoadmapSquare3} alt="RoadmapSquare3" />

					<div className="text">
						<h2>3 EARN</h2>

						<ul>
							<li>DAO Royalties distribution</li>
							<li>Merchandise drop</li>
							<li>NFT drop</li>
						</ul>
					</div>
				</div>
				<div className="single_roadmap">
					<img src={RoadmapSquare4} alt="RoadmapSquare4" />

					<div className="text">
						<h2>4 ROADMAP</h2>

						<ul>
							<li>Roadmap v2.0 to be </li>
							<li>announced after minting</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Roadmap
