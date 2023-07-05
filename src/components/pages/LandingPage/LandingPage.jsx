import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
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
					<Link to='/learning-guide' style={{color: 'white'}}>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
			<div className='landing-page-div-3 landing-page-div'>
				<div className='landing-page-div-text'>Need Help?</div>
				<div className='landing-page-div-arrow-container'>
					<Link to='/help' style={{color: 'white'}}>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
			<div className='landing-page-div-4 landing-page-div'>
				<div className='landing-page-div-text-long'>Profile</div>
				<div className='landing-page-img-long'>
					<FontAwesomeIcon icon={faUser} size='4x' />
				</div>
				<div className='landing-page-div-arrow-container-long'>
					<Link to='/profile' style={{color: 'white'}}>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
			<div className='landing-page-div-5 landing-page-div'>
				<div className='landing-page-div-text'>Frontend UI</div>
				<div className='landing-page-div-arrow-container'>
					<Link to='/frontend-ui' style={{color: 'white'}}>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
			<div className='landing-page-div-6 landing-page-div'>
				<div className='landing-page-div-text'>Backend API + Node.js</div>
				<div className='landing-page-div-arrow-container'>
					<Link to='/backend-api' style={{color: 'white'}}>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
			<div className='landing-page-div-7 landing-page-div'>
				<div className='landing-page-div-text-long'>React + MERN-Stack</div>
				<div className='landing-page-img-long'>
					<FontAwesomeIcon icon={faReact} size='4x' />
				</div>
				<div className='landing-page-div-arrow-container-long'>
					<Link to='/react' style={{color: 'white'}}>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
			<div className='landing-page-div-8 landing-page-div'>
				<div className='landing-page-div-text-long'>Deployment</div>
				<div className='landing-page-img-long'>
					<FontAwesomeIcon icon={faRocket} size='4x' />
				</div>
				<div className='landing-page-div-arrow-container-long'>
					<Link to='/deployment' style={{color: 'white'}}>
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>
				</div>
			</div>
		</div>
	)
}
