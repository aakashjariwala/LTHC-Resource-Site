import * as React from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

export default function BasicTable() {
  return (
    <Grid container alignItems="left" justifyContent="left">
      <Grid item xs={10} sm={12}>
        <Typography variant="h3">Additional Resources:</Typography>
        <br />
        <Typography variant="body1">
          If you are an individual, LUM (Lafayette Urban Ministry) is the
          primary shelter in Greater Lafayette. <br /> They accept registration
          on weekdays between 7 – 11 am and 6-7 am on Saturdays. <br /> If you
          receive a bed with LUM, check will be 9 pm that evening. Their address
          for check in is{' '}
          <a href="https://www.google.com/maps/place/420+N+4th+St,+Lafayette,+IN+47901/@40.4214562,-86.8955968,17z/data=!3m1!4b1!4m5!3m4!1s0x88131d5015686287:0x4e3b46b7873a357!8m2!3d40.4214521!4d-86.8934081">
            420 North 4th Street
          </a>{' '}
          and the actual shelter is at{' '}
          <a href="https://www.google.com/maps/place/520+N+4th+St,+Lafayette,+IN+47901/@40.4219792,-86.8956545,17z/data=!3m1!4b1!4m5!3m4!1s0x88131d5030e4a363:0x779b37e407bfc288!8m2!3d40.4219751!4d-86.8934658">
            520 North 4th Street
          </a>{' '}
        </Typography>
        <br />
        <Typography variant="body1">
          LUM also hosts an overnight warming station at their shelter location.
          Their website is&nbsp;
          <a href="https://www.lumserve.org">www.lumserve.org</a>.
          <br /> Families who need shelter should call 765-423-4880 or
          email&nbsp;
          <a href="mailto:families@lthc.net">families@lthc.net</a>&nbsp; for
          instructions due to the lack of shelter options.
        </Typography>

        <br />

        <Typography variant="body1">
          If you are in a situation involving domestic violence, contact the
          YWCA of Greater Lafayette at 765-423-1118 (24/7 hotline).{' '}
        </Typography>
        <br />
        <Typography variant="body1">
          If you need help with your rent payments, visit
          <a href="https://www.indianahousingnow.org">
            www.indianahousingnow.org
          </a>
        </Typography>
        <Typography variant="body1">
          Calling 211 or visiting <a href="https://www.211.org">www.211.org </a>{' '}
          can help you connect with a variety of services.{' '}
        </Typography>
      </Grid>
    </Grid>
  )
}
