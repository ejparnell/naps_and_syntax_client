import PropTypes from 'prop-types'
import { MenuContainer, MenuPageArrowContainer, MenuPageHeroText, MenuPageItem1, MenuPageItem2, MenuPageItem3, MenuPageItem4, MenuPageText, MenuPageTextLong, MenuPageArrowContainerLong, MenuPageImageLong, MenuPageItem5, MenuPageItem6, MenuPageItem7, MenuPageItem8 } from './MenuPageStyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

export default function MenuPage({ lessons }) {
	return (
		<MenuContainer>
			<MenuPageItem1>
				<MenuPageHeroText>{lessons.name}</MenuPageHeroText>
			</MenuPageItem1>
			<MenuPageItem2>
				<MenuPageText>{lessons.content[0].title}</MenuPageText>
				<MenuPageArrowContainer>
					<FontAwesomeIcon icon={faArrowRight} />
				</MenuPageArrowContainer>
			</MenuPageItem2>
			<MenuPageItem3>
				<MenuPageText>{lessons.content[1].title}</MenuPageText>
				<MenuPageArrowContainer>
					<FontAwesomeIcon icon={faArrowRight} />
				</MenuPageArrowContainer>
			</MenuPageItem3>
			<MenuPageItem4>
				<MenuPageTextLong>Profile</MenuPageTextLong>
				<MenuPageImageLong>
					<FontAwesomeIcon icon={faUser} size='4x' />
				</MenuPageImageLong>
				<MenuPageArrowContainerLong>
					<FontAwesomeIcon icon={faArrowRight} />
				</MenuPageArrowContainerLong>
			</MenuPageItem4>
			<MenuPageItem5>
				<MenuPageText>{lessons.content[2].title}</MenuPageText>
				<MenuPageArrowContainer>
					<FontAwesomeIcon icon={faArrowRight} />
				</MenuPageArrowContainer>
			</MenuPageItem5>
			<MenuPageItem6>
				<MenuPageText>{lessons.content[3].title}</MenuPageText>
				<MenuPageArrowContainer>
					<FontAwesomeIcon icon={faArrowRight} />
				</MenuPageArrowContainer>
			</MenuPageItem6>
			<MenuPageItem7>
				<MenuPageTextLong>{lessons.content[4].title}</MenuPageTextLong>
				<MenuPageImageLong>
					<FontAwesomeIcon icon={lessons.content[4].img} size='4x' />
				</MenuPageImageLong>
				<MenuPageArrowContainerLong>
					<FontAwesomeIcon icon={faArrowRight} />
				</MenuPageArrowContainerLong>
			</MenuPageItem7>
			<MenuPageItem8>
				<MenuPageTextLong>{lessons.content[5].title}</MenuPageTextLong>
				<MenuPageImageLong>
					<FontAwesomeIcon icon={lessons.content[5].img} size='4x' />
				</MenuPageImageLong>
				<MenuPageArrowContainerLong>
					<FontAwesomeIcon icon={faArrowRight} />
				</MenuPageArrowContainerLong>
			</MenuPageItem8>
		</MenuContainer>
	)
}

MenuPage.propTypes = {
    lessons: PropTypes.shape({
        name: PropTypes.string.isRequired,
        content: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            img: PropTypes.object,
        })).isRequired,
    }).isRequired,
}