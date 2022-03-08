/* eslint-disable import/no-duplicates */
import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import { apartment } from '../constants/apartments'
import { subsidizedHousing } from '../constants/apartments'
import { mobileHomeParks } from '../constants/apartments'
import { privateLandlords } from '../constants/apartments'
import { complexesAndRental } from '../constants/apartments'

const device = () => {
  const ua = navigator.userAgent
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile'
  }
  return 'desktop'
}

export default function landlordTable() {
  // Left and right columns of the list on desktop view for each subsection
  const rightApartment = apartment.filter((v, i) => i % 2)
  const leftApartment = apartment.filter((v, i) => !(i % 2))

  const rightSubsidized = subsidizedHousing.filter((v, i) => i % 2)
  const leftSubsidized = subsidizedHousing.filter((v, i) => !(i % 2))

  const rightMobile = mobileHomeParks.filter((v, i) => i % 2)
  const leftMobile = mobileHomeParks.filter((v, i) => !(i % 2))

  const rightLords = privateLandlords.filter((v, i) => i % 2)
  const leftLords = privateLandlords.filter((v, i) => !(i % 2))

  const rightComplex = complexesAndRental.filter((v, i) => i % 2)
  const leftComplex = complexesAndRental.filter((v, i) => !(i % 2))

  // Component for mobile view
  if (device() === 'mobile') {
    return (
      <List
        sx={{
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 720,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {['Apartments'].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{`${sectionId}`}</ListSubheader>
              {apartment.map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <div>
                        <div>{item.phone}</div>
                        <div>{item.description}</div>
                      </div>
                    }
                  />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
        {['Subsidized Housing'].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{`${sectionId}`}</ListSubheader>
              {subsidizedHousing.map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <div>
                        <div>{item.phone}</div>
                        <div>{item.description}</div>
                      </div>
                    }
                  />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
        {['Mobile Home Parks'].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{`${sectionId}`}</ListSubheader>
              {mobileHomeParks.map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <div>
                        <div>{item.phone}</div>
                        <div>{item.description}</div>
                      </div>
                    }
                  />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
        {['Private Landlords'].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{`${sectionId}`}</ListSubheader>
              {privateLandlords.map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <div>
                        <div>{item.phone}</div>
                        <div>{item.description}</div>
                      </div>
                    }
                  />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
        {['Complexes and Rentals'].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{`${sectionId}`}</ListSubheader>
              {complexesAndRental.map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <div>
                        <div>{item.phone}</div>
                        <div>{item.description}</div>
                      </div>
                    }
                  />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    )
  }
  // Component for Desktop view
  return (
    // Set's view info for the list
    <List
      sx={{
        maxWidth: 720,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 600,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {['Apartments'].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
            {leftApartment.map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText // The left column in desktop view
                  sx={{ maxWidth: 240 }} // Sets margins for text so it doesn't spill into right column
                  primary={item.name}
                  secondary={
                    <div>
                      <div>{item.phone}</div>
                      <div>{item.description}</div>
                    </div>
                  }
                />
                <ListItemText // The right column in desktop view
                  // Sets right column offset from the left
                  sx={{
                    maxWidth: 240,
                    position: 'relative',
                    left: 200,
                  }}
                  // Uses indexof to avoid having to use a counter
                  // Need to make sure # of elements in right = left
                  // and if it doesn't, make an empty item at the end
                  // of the respective json category in apartments.js
                  // This is the case for all of the desktop view
                  // info.
                  primary={rightApartment[leftApartment.indexOf(item)].name}
                  secondary={
                    <div>
                      <div>{rightApartment[leftApartment.indexOf(item)].phone}</div>
                      <div>{rightApartment[leftApartment.indexOf(item)].description}</div>
                    </div>
                  }
                  align="left"
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
      {['Subsidized Housing'].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
            {leftSubsidized.map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText
                  sx={{ maxWidth: 240 }}
                  primary={item.name}
                  secondary={
                    <div>
                      <div>{item.phone}</div>
                      <div>{item.description}</div>
                    </div>
                  }
                />
                <ListItemText
                  sx={{
                    maxWidth: 240,
                    position: 'relative',
                    left: 200,
                  }}
                  primary={rightSubsidized[leftSubsidized.indexOf(item)].name}
                  secondary={
                    <div>
                      <div>{rightSubsidized[leftSubsidized.indexOf(item)].phone}</div>
                      <div>{rightSubsidized[leftSubsidized.indexOf(item)].description}</div>
                    </div>
                  }
                  align="left"
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
      {['Mobile Home Parks'].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
            {leftMobile.map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText
                  sx={{ maxWidth: 240 }}
                  primary={item.name}
                  secondary={
                    <div>
                      <div>{item.phone}</div>
                      <div>{item.description}</div>
                    </div>
                  }
                />
                <ListItemText
                  sx={{
                    maxWidth: 240,
                    position: 'relative',
                    left: 200,
                  }}
                  primary={rightMobile[leftMobile.indexOf(item)].name}
                  secondary={
                    <div>
                      <div>{rightMobile[leftMobile.indexOf(item)].phone}</div>
                      <div>{rightMobile[leftMobile.indexOf(item)].description}</div>
                    </div>
                  }
                  align="left"
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
      {['Private Landlords'].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
            {leftLords.map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText
                  sx={{ maxWidth: 240 }}
                  primary={item.name}
                  secondary={
                    <div>
                      <div>{item.phone}</div>
                      <div>{item.description}</div>
                    </div>
                  }
                />
                <ListItemText
                  sx={{
                    maxWidth: 240,
                    position: 'relative',
                    left: 200,
                  }}
                  primary={rightLords[leftLords.indexOf(item)].name}
                  secondary={
                    <div>
                      <div>{rightLords[leftLords.indexOf(item)].phone}</div>
                      <div>{rightLords[leftLords.indexOf(item)].description}</div>
                    </div>
                  }
                  align="left"
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
      {['Complexes and Rentals'].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
            {leftComplex.map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText
                  sx={{ maxWidth: 240 }}
                  primary={item.name}
                  secondary={
                    <div>
                      <div>{item.phone}</div>
                      <div>{item.description}</div>
                    </div>
                  }
                />
                <ListItemText
                  sx={{
                    maxWidth: 240,
                    position: 'relative',
                    left: 200,
                  }}
                  primary={rightComplex[leftComplex.indexOf(item)].name}
                  secondary={
                    <div>
                      <div>{rightComplex[leftComplex.indexOf(item)].phone}</div>
                      <div>{rightComplex[leftComplex.indexOf(item)].description}</div>
                    </div>
                  }
                  align="left"
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  )
}
