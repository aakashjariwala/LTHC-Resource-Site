import { Container, Typography, Box, Button } from '@mui/material'
import { Element, scroller } from 'react-scroll'
import FirstView from '../../components/About'
import RequirementAccordion from '../../components/RequirementAccordion'
import Resources from '../../components/Resources'

function Main() {
  return (
    <Container py={3}>
      <FirstView />
      <RequirementAccordion />
      <Resources />
    </Container>
  )
}

export default Main
