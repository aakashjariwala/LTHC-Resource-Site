import { Container, Typography, Box, Button } from '@mui/material'
import { Element, scroller } from 'react-scroll'
import RequirementAccordion from '../../components/RequirementAccordion'

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
    </Container>
  )
}

export default Main
