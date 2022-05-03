import TeamLineLeft from '../assets/TeamLineLeft.png'
import TeamHeadingImg from '../assets/TeamHeadingImg.png'
import TeamLineRight from '../assets/TeamLineRight.png'

import Team1 from '../assets/Team1.png'
import Team2 from '../assets/Team2.png'
import Team3 from '../assets/Team3.png'

const Team = () => {
	return (
		<div className="team">
			<div className="heading">
				<img className="left" src={TeamLineLeft} alt="TeamLineLeft" />
				<img className="team_heading" src={TeamHeadingImg} alt="TeamHeadingImg" />
				<img className="right" src={TeamLineRight} alt="TeamLineRight" />
			</div>

			<div className="teams_row">
				<div className="single_team">
					<div className="img_container">
						<img src={Team1} alt="Team1" />
					</div>
					<h2>CHOPIX</h2>
					<p>Project Manager</p>
				</div>

				<div className="single_team">
					<div className="img_container">
						<img src={Team2} alt="Team1" />
					</div>
					<h2>LUIGIX</h2>
					<p>Leader Artist</p>
				</div>

				<div className="single_team">
					<div className="img_container">
						<img src={Team3} alt="Team1" />
					</div>
					<h2>Lil’ CLAWS</h2>
					<p>Advisor</p>
				</div>
			</div>
		</div>
	)
}

export default Team
