import PropTypes from 'prop-types'
import { Component } from 'react'
import DefaultPicture from '../../assets/profile.png'
import { CardLabel, CardTitle, CardImage, CardWrapper} from './style'


// function Card({ label, title, picture }) {
//   const { theme } = useTheme()
//   const [isFavorite, setIsFavorite] = useState(false)
//   const star = isFavorite ? '⭐️' : ''

//   return (
//     <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
//       <CardLabel theme={theme}>{label}</CardLabel>
//       <CardImage src={picture} alt="freelance" />
//       <CardTitle theme={theme}>
//         {star} {title} {star}
//       </CardTitle>
//     </CardWrapper>
//   )
// }

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { theme, picture, label, title } = this.props
    
    return (
      <CardWrapper theme={theme}>
        <CardLabel theme={theme}>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardTitle theme={theme}>{title}</CardTitle>
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
  theme: 'Light',
}

export default Card
