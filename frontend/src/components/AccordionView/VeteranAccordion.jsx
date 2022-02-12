import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function VeteranAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Veterans</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you are a Veteran, to qualify for services at LTHC Homeless
            Services, you must:
          </Typography>
          <Typography>
            - Be located in Benton, Clinton, Carroll, White, Tippecanoe,
            Fountain, Warren, Montgomery Counties
          </Typography>
          <Typography>
            {' '}
            - Be at-at risk for or already experiencing homelessness
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
