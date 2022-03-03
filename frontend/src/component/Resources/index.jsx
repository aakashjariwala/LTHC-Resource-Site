import * as React from 'react'
import { Typography } from '@mui/material'
import resources from '../../constants/resources.json'

export default function Resources() {
  return (
    <div align="center">
      <Typography variant="h3">Additional Resources:</Typography>
      <br />
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: resources.individual_info }}
      />
      <br />
      <Typography variant="body1">
        LUM also hosts an overnight warming station at their shelter location.
        Their website is&nbsp;
        <a href="https://www.lumserve.org">www.lumserve.org</a>.
        <br /> Families who need shelter should call 765-423-4880 or email&nbsp;
        <a href="mailto:families@lthc.net">families@lthc.net</a>&nbsp; for
        instructions due to the lack of shelter options.
      </Typography>

      <br />

      <Typography variant="body1">
        If you are in a situation involving domestic violence, contact the YWCA
        of Greater Lafayette at 765-423-1118 (24/7 hotline).{' '}
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
    </div>
  )
}
