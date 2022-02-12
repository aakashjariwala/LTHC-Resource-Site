import * as React from 'react'
import Grid from '@mui/material/Grid'
import VeteranAccordion from './VeteranAccordion'
import IndividualAccordion from './IndividualAccordion'
import FamilyAccordion from './FamilyAccordion'

export default function SimpleAccordion() {
  return (
    <div style={{ display: 'flex' }}>
      <Grid
        container
        rowSpacing={3}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={10} sm={12}>
          <h2 align="center">Information about each category</h2>
        </Grid>
        <Grid item xs={10} sm={12}>
          <FamilyAccordion />
        </Grid>

        <Grid item xs={10} sm={12}>
          <IndividualAccordion />
        </Grid>

        <Grid item xs={10} sm={12}>
          <VeteranAccordion />
        </Grid>
      </Grid>
    </div>
  )
  // return default App
}
