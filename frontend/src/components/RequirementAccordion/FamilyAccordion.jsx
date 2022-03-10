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
          Family qualifications and services
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          If you are a family, to qualify for services at LTHC Homeless
          Services, you must:
        </Typography>
        <Typography>
          - be located in Tippecanoe County, IN
          <br />- not have any housing (this includes not having friends/family
          to stay with)
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: 600 }}>Resources: </Typography>
        <Typography>
          Families who need shelter should call{' '}
          <a href="tel:7654234880">765-423-4880</a> or email{' '}
          <a href="mailto:families@lthc.net">families@lthc.net</a> for
          instructions due to the lack of shelter options.
        </Typography>
        <Typography>
          Tippecanoe County does not regularly have emergency openings for
          family shelter (at Family Promise or the YWCA Domestic Violence
          Shelter). Families who need shelter should call{' '}
          <a href="tel:7654234880">765-423-4880</a> or email{' '}
          <a href="families@lthc.net">families@lthc.net</a> for instructions due
          to the lack of shelter options.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
