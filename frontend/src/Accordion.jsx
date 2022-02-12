import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

export default function SimpleAccordion() {
  return (
    <div>
      <Grid container columnSpacing={3} alignItems="left" justifyContent="left">
        <Grid item xs={10} sm={12}>
          <br />
          <h2 align="center">Information about each category</h2>
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
                LUM also hosts an overnight warming station at their shelter
                location. Their website is&nbsp;
                <a href="https://www.lumserve.org">www.lumserve.org</a>.
                <br /> Families who need shelter should call 765-423-4880 or
                email&nbsp;
                <a href="mailto:families@lthc.net">families@lthc.net</a>&nbsp;
                for instructions due to the lack of shelter options.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Individuals</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you are an individual, LUM (Lafayette Urban Ministry) is the
                primary shelter in Greater Lafayette. <br /> They accept
                registration on weekdays between 7 – 11 am and 6-7 am on
                Saturdays. <br /> If you receive a bed with LUM, check will be 9
                pm that evening. <br /> Their address for check in is 420 North
                4th Street and the actual shelter is at 520 North 4th.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  )
  // return default App
}
