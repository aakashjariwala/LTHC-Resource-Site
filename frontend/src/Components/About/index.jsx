import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ButtonGroup from '@mui/material/ButtonGroup'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import constants from '../../constants/about.json'

function App() {
  // unFinished components for Buttons later

  const [anchorIndividuals, setAnchorIndividuals] = useState(null)
  const openIndividualsMenu = Boolean(anchorIndividuals)
  const [anchorFamilies, setAnchorFamilies] = useState(null)
  const openFamiliesMenu = Boolean(anchorFamilies)
  const [anchorVeterans, setAnchorVeterans] = useState(null)
  const openVeteransMenu = Boolean(anchorVeterans)

  return (
    <Container sx={{ background: '#2F579B', display: 'flex' }}>
      <Container
        sx={{
          background: '#FFFFFF',
          marginTop: '30px',
          marginBottom: '30px',
          marginRight: '20px',
          marginLeft: '20px',
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
              padding: '10px',
            }}
          >
            <img src="LTHC LOGO.jpg" alt="logo" height="80px" />
            <Typography variant="h4" sx={{ color: '#2F579B' }}>
              <b> LTHC Homeless Services</b>
            </Typography>
          </Box>
        </Stack>
        <Stack sx={{ alignItems: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: '#2F579B',
              fontFamily: 'sans-serif',
            }}
            dangerouslySetInnerHTML={{ __html: constants.about }}
          />
          <Typography
            variant="h4"
            sx={{ color: '#2F579B', fontFamily: 'sans-serif' }}
          >
            <b>Please select one of the following:</b>
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }}>
            <Button
              variant="outlined"
              sx={{ borderRadius: 3, border: 2, margin: '15px' }}
            >
              Veteran
            </Button>
            <Button
              variant="outlined"
              sx={{ borderRadius: 3, border: 2, margin: '15px' }}
            >
              Individual
            </Button>
            <Button
              variant="outlined"
              sx={{ borderRadius: 3, border: 2, margin: '15px' }}
            >
              Family
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Container>
  )
}

export default App
