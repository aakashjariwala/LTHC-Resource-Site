import { Container, Typography, Box, Button } from '@mui/material'
import { Element, scroller } from 'react-scroll'

function Main() {
  const onScroll = () => {
    scroller.scrollTo('demo', {
      duration: 300,
      smooth: true,
    })
  }

  return (
    <Container>
      <Box sx={{ border: '1px solid black', width: '80vw', height: '150vh' }}>
        <Typography variant="body1">
          Click on button to smooth scroll down
        </Typography>
        <Button onClick={onScroll} variant="contained">
          Scroll down
        </Button>
      </Box>
      <Element name="demo">
        <Typography variant="body1">Scroll here!</Typography>
      </Element>
    </Container>
  )
}

export default Main
