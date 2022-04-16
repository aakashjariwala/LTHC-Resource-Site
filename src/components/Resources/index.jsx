import { Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
// eslint-disable-next-line import/no-cycle
import { useSiteDataContext } from '../../views/Main'

export default function Resources() {
  const { additionalResourcesText } = useSiteDataContext()
  return (
    <>
      <Typography variant="h6" textAlign="center">
        Additional Resources:
      </Typography>

      <ul>
        {additionalResourcesText.map((resources) => (
          <li key={uuidv4()}>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{ __html: resources }}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
