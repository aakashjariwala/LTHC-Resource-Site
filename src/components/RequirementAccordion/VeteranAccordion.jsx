import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function VeteranAccordion() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontWeight: 600 }}>
          Veteran qualifications and services
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          If you are a Veteran, to qualify for services at LTHC Homeless
          Services, you must:
        </Typography>
        <Typography>
          - be located in Benton, Clinton, Carroll, White, Tippecanoe, Fountain,
          Warren, Montgomery Counties
        </Typography>
        <Typography>
          - be at-at risk for or already experiencing homelessness
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
