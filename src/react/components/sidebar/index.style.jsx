import styled from 'react-emotion'
import colors from '../ui/colors'

const sidebar = styled('div')`
  background: ${colors.sidebar};
  min-height: 100vh;
  max-height: none;
  max-width: 85%;
  h1 {
    color: ${colors.white};
    text-align: center;
    padding: 32px 0;
    font-family: 'Kadwa', 'Source Sans Pro', sans-serif;
    background: ${colors.primary};
  }
`

export default sidebar
