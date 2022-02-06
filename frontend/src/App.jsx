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

function App() {
  // unFinished components for TopBar later

  const [anchorIndividuals, setAnchorIndividuals] = useState(null)
  const openIndividualsMenu = Boolean(anchorIndividuals)
  const [anchorFamilies, setAnchorFamilies] = useState(null)
  const openFamiliesMenu = Boolean(anchorFamilies)
  const [anchorVeterans, setAnchorVeterans] = useState(null)
  const openVeteransMenu = Boolean(anchorVeterans)

  return (
    // TopBar code

    <Box style={{ background: '#2F579B' }}>
      <AppBar
        position="static"
        style={{ width: '100%', background: '#FFFFFF' }}
      >
        <Toolbar>
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            style={{ width: '100%' }}
          >
            <Stack direction="row" style={{ width: '50%' }}>
              <Box style={{ margin: 'auto' }}>
                <img src="LTHC LOGO.jpg" height="80px" alt="logo" />
              </Box>
              <Box style={{ float: 'right', margin: 'auto' }}>
                <Typography variant="h3" component="div" color="#2F579B">
                  <b>LTHC Homeless Services</b>
                </Typography>
              </Box>
            </Stack>
            <Box style={{ width: '50%' }}>
              <Stack direction="row" /* spacing={14} */>
                <Box style={{ width: '33%', margin: 'auto' }}>
                  <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={openFamiliesMenu ? 'true' : undefined}
                    onClick={(e) => setAnchorFamilies(e.currentTarget)}
                    sx={{ color: '#2F579B', textTransform: 'none' }}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    <h1>
                      <b>Families</b>
                    </h1>
                  </Button>
                </Box>

                <Box style={{ width: '33%', margin: 'auto' }}>
                  <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={openVeteransMenu ? 'true' : undefined}
                    onClick={(e) => setAnchorVeterans(e.currentTarget)}
                    sx={{ color: '#2F579B', textTransform: 'none' }}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    <h1>
                      <b>Veterans</b>
                    </h1>
                  </Button>
                </Box>

                <Box style={{ width: '33%', margin: 'auto' }}>
                  <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={openIndividualsMenu ? 'true' : undefined}
                    onClick={(e) => setAnchorIndividuals(e.currentTarget)}
                    sx={{ color: '#2F579B', textTransform: 'none' }}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    <h1>
                      <b>Individuals</b>
                    </h1>
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        style={{
          background: '#2F579B',
          display: 'flex',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            marginTop: '6%',
            marginBottom: '5%',
            marginLeft: '13%',
            marginRight: '13%',
          }}
          style={{ background: '#FFFFFF' }}
        >
          <Stack direction="column">
            <Stack direction="row">
              <Container
                style={{
                  width: '47%',
                  marginLeft: '3%',
                  background: '#CCCCCC',
                  marginBottom: '3%',
                  marginTop: '3%',
                }}
              >
                <html lang="en">
                  <div style={{ fontFamily: 'sans-serif' }}>
                    <b>
                      <br />
                      If you are an individual or family, to qualify for
                      services at LTHC Homeless Services, you must: <br />{' '}
                      <br />- Be located in Tippecanoe County, Indiana; and{' '}
                      <br /> <br />- Not have any housing (this includes not
                      having friends/family to stay with) <br />{' '}
                    </b>
                  </div>
                </html>
              </Container>
              <Container
                style={{
                  width: '50%',
                }}
              >
                <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                  <b>
                    <br />
                    Please choose the option that best describes you:
                    <br />
                  </b>
                </div>
                <Stack
                  style={{ marginTop: '3%' }}
                  spacing={2}
                  divider={<Divider orientation="horizontal" flexItem />}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: '30%',
                      marginLeft: '35%',
                      marginRight: '35%',
                    }}
                  >
                    Family
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      width: '30%',
                      marginLeft: '35%',
                      marginRight: '35%',
                    }}
                  >
                    Veteran
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      width: '30%',
                      marginLeft: '35%',
                      marginRight: '35%',
                    }}
                  >
                    Individual
                  </Button>
                </Stack>
              </Container>
            </Stack>
            <Stack direction="row">
              <Container
                style={{
                  width: '47%',
                  marginLeft: '3%',
                  marginBottom: '3%',
                  background: '#CCCCCC',
                }}
              >
                <div style={{ fontFamily: 'sans-serif' }}>
                  <b>
                    <br />
                    If you are a Veteran, to qualify for services at LTHC
                    Homeless Services, you must: <br />
                    <br />- Be located in Benton, Clinton, Carroll, White,
                    Tippecanoe, Fountain, Warren, Montgomery Counties; and
                    <br />
                    <br />- Be at risk for or already experiencing homelessness
                  </b>
                </div>
              </Container>
              <Container
                style={{
                  width: '50%',
                }}
              >
                <img
                  src="stock image.jpg"
                  width="60%"
                  height="80%"
                  alt="stock"
                  style={{
                    marginLeft: '20%',
                    marginRight: '20%',
                    marginBottom: '3%',
                    marginTop: '3%',
                  }}
                />
              </Container>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default App
