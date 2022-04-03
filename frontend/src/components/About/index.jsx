import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import constants from '../../constants/about.json'
// eslint-disable-next-line import/no-cycle
import { useSiteDataContext } from '../../views/Main'

function About() {
  const { aboutText } = useSiteDataContext()

  return (
    <Container sx={{ backgroundColor: '#2F579B', display: 'flex', p: 2 }}>
      <Container
        sx={{
          backgroundColor: '#fff',
          p: 1,
        }}
      >
        <Stack sx={{ alignItems: 'center', marginTop: '10px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 3,
              borderRadius: 3,
              borderColor: '#2F579B',
              width: 'fit-content',
              padding: '10px 25px',
            }}
          >
            <img src="LTHC LOGO.jpg" alt="logo" height="80px" />
            <Typography
              variant="h6"
              sx={{ color: '#2F579B', textAlign: 'center', fontWeight: 800 }}
            >
              LTHC&#39;s Homeless Services
            </Typography>
          </Box>
        </Stack>
        <Stack sx={{ alignItems: 'center', mt: 2 }}>
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              color: '#2F579B',
              fontFamily: 'sans-serif',
            }}
            dangerouslySetInnerHTML={{ __html: aboutText }}
          />
        </Stack>
      </Container>
    </Container>
  )
}

export default About
