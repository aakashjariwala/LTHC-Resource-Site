import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function individualAccordion() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontWeight: 600 }}>
          Individual qualifications and services
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          If you are an individual, to qualify for services at LTHC Homeless
          Services, you must: - be located in Tippecanoe County, IN
          <br />- not have any housing (this includes not having friends/family
          to stay with)
          <br />
          <br />
          <b>Resources: </b>
          If you are an individual, LUM (Lafayette Urban Ministry) is the
          primary shelter in Greater Lafayette. They accept registration on
          weekdays between 7 - 11 am and 6 - 7 am on Saturdays. If you receive a
          bed with LUM, check will be 9 pm that evening. Their address for check
          in is{' '}
          <a
            target="_blank"
            href="https://www.google.com/maps/place/420+N+4th+St,+Lafayette,+IN+47901/@40.4214562,-86.8955968,17z/data=!3m1!4b1!4m5!3m4!1s0x88131d5015686287:0x4e3b46b7873a357!8m2!3d40.4214521!4d-86.8934081"
            rel="noreferrer"
          >
            420 North 4th Street
          </a>{' '}
          and the actual shelter is at{' '}
          <a
            target="_blank"
            href="https://www.google.com/maps/place/520+N+4th+St,+Lafayette,+IN+47901/@40.4219792,-86.8956545,17z/data=!3m1!4b1!4m5!3m4!1s0x88131d5030e4a363:0x779b37e407bfc288!8m2!3d40.4219751!4d-86.8934658"
            rel="noreferrer"
          >
            520 North 4th
          </a>
          .
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
