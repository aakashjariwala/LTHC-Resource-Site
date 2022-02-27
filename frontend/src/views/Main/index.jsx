import { Container, Typography, Box, Button } from '@mui/material'
import { Element, scroller } from 'react-scroll'
import RequirementAccordion from '../../Components/RequirementAccordion'
import FirstView from '../FirstView'

function Main() {
  const onScroll = () => {
    scroller.scrollTo('demo', {
      duration: 300,
      smooth: true,
    })
  }

  return (
    <Container>
      <FirstView />
      <RequirementAccordion />
    </Container>
  )
}

export default Main
