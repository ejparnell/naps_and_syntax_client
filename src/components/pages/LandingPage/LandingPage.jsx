import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import './LandingPage.css'

export default function LandingPage() {
	return (
		<div className='landing-page-container'>
			<div className='landing-page-div-1 landing-page-div'>
				<div className='landing-page-hero-text'>NAPS + SYNTAX</div>
			</div>
			<div className='landing-page-div-2 landing-page-div'>
				<div className='landing-page-div-text'>Learning Guide</div>
				<div className='landing-page-div-arrow-container'>
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
			<div className='landing-page-div-3 landing-page-div'>
				<div className='landing-page-div-text'>Need Help?</div>
				<div className='landing-page-div-arrow-container'>
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
			<div className='landing-page-div-4 landing-page-div'>
				<div className='landing-page-div-text-long'>Profile</div>
				<div className='landing-page-img-long'>
					<FontAwesomeIcon icon={faUser} size='4x' />
				</div>
				<div className='landing-page-div-arrow-container-long'>
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
			<div className='landing-page-div-5 landing-page-div'>
				<div className='landing-page-div-text'>HTML + CSS + JavaScript</div>
				<div className='landing-page-div-arrow-container'>
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
			<div className='landing-page-div-6 landing-page-div'>
				<div className='landing-page-div-text'>
					Express + MongoDB + Mongoose
				</div>
				<div className='landing-page-div-arrow-container'>
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
			<div className='landing-page-div-7 landing-page-div'>
				<div className='landing-page-div-text-long'>React</div>
				<div className='landing-page-img-long'>
					<FontAwesomeIcon icon={faReact} size='4x' />
				</div>
				<div className='landing-page-div-arrow-container-long'>
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
			<div className='landing-page-div-8 landing-page-div'>
				<div className='landing-page-div-text-long'>Deployment</div>
				<div className='landing-page-img-long'>
					<FontAwesomeIcon icon={faRocket} size='4x' />
				</div>
				<div className='landing-page-div-arrow-container-long'>
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
		</div>
	)
}
