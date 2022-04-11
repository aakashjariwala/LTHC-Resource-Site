import { Container, Box, Typography } from '@mui/material'

const Section = ({ section }) => {
  return (
    <Container>
      {section?.title && (
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {section.title}
        </Typography>
      )}
      <Box dangerouslySetInnerHTML={{ __html: section.text }} />
    </Container>
  )
}

export default Section
