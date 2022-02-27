import { Container, Typography, Box, Button } from '@mui/material'
import { Element, scroller } from 'react-scroll'
import RequirementAccordion from '../../components/RequirementAccordion'
import Resources from '../../components/Resources/Resources'

function Main() {
  const onScroll = () => {
    scroller.scrollTo('demo', {
      duration: 300,
      smooth: true,
    })
  }

  return (
    <Container>
      <RequirementAccordion />
      <Resources />
    </Container>
  )
}

export default Main
