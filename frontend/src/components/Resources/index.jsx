import { Typography } from '@mui/material'

export default function Resources() {
  return (
    <>
      <Typography variant="h6" textAlign="center">
        Additional Resources:
      </Typography>

      <ul>
        <li>
          <Typography variant="body1" mt={1}>
            LTHC provides for basic needs such as meals, showers, laundry, as
            well as telephone and mail access. Our Housing Stability Case
            Managers help each guest make a plan for housing and they can work
            with staff in our Employment, Housing, and Health &#38; Wellness
            departments to make that plan stronger.
          </Typography>
        </li>

        <li>
          <Typography variant="body1">
            LUM also hosts an overnight warming station at their shelter
            location. Their website is&nbsp;
            <a href="https://www.lumserve.org" target="_blank" rel="noreferrer">
              www.lumserve.org
            </a>
            .
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            LTHC Homeless Services does have a crisis shelter for persons newly
            coming into homeless. If this is you, contact{' '}
            <a href="info@lthc.net">info@lthc.net</a> for instructions.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            If you are in a situation involving domestic violence, contact the
            YWCA of Greater Lafayette at{' '}
            <a href="tel:7654231118">765-423-1118</a> (24/7 hotline).{' '}
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            If you need help with your rent payments, visit
            <a
              href="https://www.indianahousingnow.org"
              target="_blank"
              rel="noreferrer"
            >
              www.indianahousingnow.org
            </a>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Calling <a href="tel:211">211</a> or visiting{' '}
            <a href="https://www.211.org" target="_blank" rel="noreferrer">
              www.211.org{' '}
            </a>{' '}
            can help you connect with a variety of services.{' '}
          </Typography>
        </li>
      </ul>
    </>
  )
}
