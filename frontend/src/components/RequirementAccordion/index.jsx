import {
  Typography,
  Stack,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// eslint-disable-next-line import/no-cycle
import { useSiteDataContext } from '../../views/Main'

export default function RequirementAccordion() {
  const { resourcesText } = useSiteDataContext()
  return (
    <Stack alignItems="center" my={5}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        Resources
      </Typography>
      <Box mt={4} sx={{ width: '100%' }}>
        {resourcesText.map(({ tag, text }) => (
          <Accordion key={tag}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{tag}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box dangerouslySetInnerHTML={{ __html: text }} />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Stack>
  )
}
