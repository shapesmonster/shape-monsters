import AboutHeading from '../assets/AboutHeading.png'
import AboutMonters from '../assets/couple.png'

const About = () => {
	return (
		<div className="about">
			<div className="left">
				<img className="about_heading" src={AboutHeading} alt="AboutHeading" />
				<p>All the Shape Monsters are hand drawn by Bang! Bang! street art collective and inspired by little kids drawings.</p>
				<p>
					Collecting a Shape Monster makes you part of our community, and gives you the chance of getting rewards by simply hodling them.{' '}
				</p>
			</div>

			<div className="right">
				<img src={AboutMonters} alt="AboutMonters" />
			</div>
		</div>
	)
}

export default About
