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
          <Typography>Families</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you are a family, to qualify for services at LTHC Homeless
            Services, you must::{' '}
          </Typography>
          <Typography>
            ~ be located in Tippecanoe County, IN; and <br />~ not have any
            housing (this includes not having friends/family to stay with)
          </Typography>
          <Typography>Resources: </Typography>
          <Typography>
            LUM also hosts an overnight warming station at their shelter
            location. Their website is&nbsp;
            <a href="https://www.lumserve.org">www.lumserve.org</a>.
            <br /> Families who need shelter should call 765-423-4880 or
            email&nbsp;
            <a href="mailto:families@lthc.net">families@lthc.net</a>&nbsp; for
            instructions due to the lack of shelter options.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
