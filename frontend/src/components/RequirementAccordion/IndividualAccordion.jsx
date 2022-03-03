import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function individualAccordion() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Individuals</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          If you are an individual, to qualify for services at LTHC Homeless
          Services, you must::
        </Typography>
        <Typography>
          ~ be located in Tippecanoe County, IN; and <br />~ not have any
          housing (this includes not having friends/family to stay with)
        </Typography>
        <Typography>Resources: </Typography>
        <Typography>
          If you are an individual, LUM (Lafayette Urban Ministry) is the
          primary shelter in Greater Lafayette. <br /> They accept registration
          on weekdays between 7 – 11 am and 6-7 am on Saturdays. <br /> If you
          receive a bed with LUM, check will be 9 pm that evening. <br /> Their
          address for check in is 420 North 4th Street and the actual shelter is
          at 520 North 4th.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
