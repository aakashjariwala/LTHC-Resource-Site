import { Container, Typography } from '@mui/material'

const Section = ({ section }) => {
  return (
    <Container>
      <Typography variant="body1">{section.text}</Typography>
    </Container>
  )
}

export default Section
